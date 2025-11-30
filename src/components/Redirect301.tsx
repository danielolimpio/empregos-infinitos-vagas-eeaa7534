import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Componente para gerenciar redirecionamentos 301 (permanentes)
 * Útil para URLs antigas que foram movidas ou reorganizadas
 */

// Mapa de redirecionamentos: URL antiga -> URL nova
const redirects: Record<string, string> = {
  "/vagas": "/buscar-vagas",
  "/emprego": "/buscar-vagas",
  "/trabalho": "/buscar-vagas",
  "/jobs": "/buscar-vagas",
  "/empresa": "/empresas",
  "/companies": "/empresas",
  "/carreira": "/dicas-carreira",
  "/blog": "/dicas-carreira",
  "/artigos": "/dicas-carreira",
  "/career": "/dicas-carreira",
  "/tips": "/dicas-carreira",
  "/publicar": "/publicar-vaga",
  "/postar-vaga": "/publicar-vaga",
  "/anunciar": "/publicar-vaga",
  "/candidatos": "/buscar-candidatos",
  "/talentos": "/buscar-candidatos",
  "/recrutar": "/buscar-candidatos",
  "/login-empresa": "/login",
  "/login-candidato": "/login",
  "/entrar": "/login",
  "/registro": "/cadastro",
  "/criar-conta": "/cadastro",
  "/sign-up": "/cadastro",
  "/ajuda": "/suporte",
  "/help": "/suporte",
  "/contato": "/suporte",
  "/contact": "/suporte",
  "/precos": "/planos",
  "/pricing": "/planos",
  "/assinatura": "/planos",
};

const Redirect301 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    
    // Verifica se a URL atual precisa ser redirecionada
    if (redirects[currentPath]) {
      const newPath = redirects[currentPath];
      
      // Log para tracking (pode ser removido em produção)
      console.log(`301 Redirect: ${currentPath} -> ${newPath}`);
      
      // Redireciona mantendo query params se houver
      navigate(newPath + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default Redirect301;
