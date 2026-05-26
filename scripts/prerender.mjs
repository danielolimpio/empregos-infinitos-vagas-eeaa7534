#!/usr/bin/env node
/**
 * Pré-renderização estática usando Puppeteer moderno.
 * Substitui o react-snap (obsoleto, falha com sintaxe JS moderna).
 *
 * Fluxo:
 *  1. Sobe servidor estático servindo ./dist
 *  2. Para cada rota, navega no Chromium e aguarda hidratação React
 *  3. Salva HTML renderizado em dist/<rota>/index.html
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 45678;

const ROUTES = [
  "/",
  "/buscar-vagas",
  "/empresas",
  "/salarios",
  "/criar-perfil",
  "/dicas-carreira",
  "/dicas-carreira/categoria/carreira",
  "/dicas-carreira/categoria/entrevista",
  "/dicas-carreira/categoria/mercado",
  "/dicas-carreira/categoria/curriculo",
  "/dicas-carreira/categoria/recrutamento",
  "/publicar-vaga",
  "/buscar-candidatos",
  "/ferramentas",
  "/suporte",
  "/politica-de-uso",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/sitemap",
  "/login",
  "/cadastro",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function serveStatic() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        let filePath = path.join(DIST, urlPath);

        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }
        if (!fs.existsSync(filePath)) {
          // SPA fallback
          filePath = path.join(DIST, "index.html");
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
      } catch (e) {
        res.writeHead(500);
        res.end(String(e));
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    console.error("dist/index.html não encontrado. Rode `npm run build` antes.");
    process.exit(1);
  }

  const server = await serveStatic();
  console.log(`Servidor estático em http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  let failures = 0;
  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await browser.newPage();
    try {
      page.on("pageerror", (err) => console.warn(`[pageerror ${route}]`, err.message));
      await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
      // Aguarda React hidratar
      await page.waitForSelector("#root > *", { timeout: 15000 }).catch(() => {});
      await new Promise((r) => setTimeout(r, 800));

      const html = await page.content();
      const outDir =
        route === "/" ? DIST : path.join(DIST, ...route.split("/").filter(Boolean));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
      console.log(`✓ ${route}`);
    } catch (e) {
      failures++;
      console.error(`✗ ${route}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`Concluído. ${ROUTES.length - failures}/${ROUTES.length} rotas geradas.`);
  if (failures === ROUTES.length) process.exit(1);
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});
