import { Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Plugin Vite para preservar páginas HTML estáticas no build
 * Copia todas as pastas com index.html do public/ para dist/
 * e substitui o index.html da raiz pelo estático
 */
export function staticPagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-static-pages',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');

      // Função recursiva para copiar diretórios
      function copyDirRecursive(src: string, dest: string) {
        if (!fs.existsSync(src)) return;
        
        const entries = fs.readdirSync(src, { withFileTypes: true });
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          if (entry.isDirectory()) {
            // Verifica se o diretório contém um index.html
            const hasIndexHtml = fs.existsSync(path.join(srcPath, 'index.html'));
            
            if (hasIndexHtml) {
              // Cria o diretório no destino se não existir
              if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
              }
              
              // Copia todo o conteúdo do diretório
              copyDirRecursive(srcPath, destPath);
            } else {
              // Continua buscando em subdiretórios
              copyDirRecursive(srcPath, destPath);
            }
          } else if (entry.name === 'index.html') {
            // Copia o index.html para o diretório destino
            if (!fs.existsSync(path.dirname(destPath))) {
              fs.mkdirSync(path.dirname(destPath), { recursive: true });
            }
            fs.copyFileSync(srcPath, destPath);
            console.log(`[static-pages] Copied: ${srcPath} -> ${destPath}`);
          }
        }
      }

      // Lista de diretórios estáticos para copiar
      const staticDirs = [
        'buscar-vagas',
        'empresas',
        'salarios',
        'criar-perfil',
        'dicas-carreira',
        'login',
        'cadastro',
        'publicar-vaga',
        'buscar-candidatos',
        'ferramentas',
        'suporte',
        'politica-de-uso',
        'politica-de-privacidade',
        'politica-de-cookies',
        'sitemap'
      ];

      // Copia cada diretório estático
      for (const dir of staticDirs) {
        const srcDir = path.join(publicDir, dir);
        const destDir = path.join(distDir, dir);
        
        if (fs.existsSync(srcDir)) {
          copyDirRecursive(srcDir, destDir);
        }
      }

      // Copia subdiretórios de dicas-carreira/categoria
      const categoriaDir = path.join(publicDir, 'dicas-carreira', 'categoria');
      if (fs.existsSync(categoriaDir)) {
        copyDirRecursive(categoriaDir, path.join(distDir, 'dicas-carreira', 'categoria'));
      }

      // Substitui o index.html da raiz pelo estático
      const staticRootIndex = path.join(publicDir, 'index-static.html');
      const distIndex = path.join(distDir, 'index.html');
      
      if (fs.existsSync(staticRootIndex)) {
        fs.copyFileSync(staticRootIndex, distIndex);
        console.log(`[static-pages] Replaced root index.html with static version`);
      }

      console.log('[static-pages] Static pages copy complete!');
    }
  };
}
