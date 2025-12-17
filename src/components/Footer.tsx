import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logo.png");

  useEffect(() => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setLogoSrc(currentTheme === "dark" ? "/logo-dark.png" : "/logo.png");
  }, [theme, resolvedTheme]);

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
                <img
                  src={logoSrc}
                  alt="Logo Vagas de Trabalhos - vagas de emprego"
                  width={160}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">Vagas de Trabalhos</span>
              </a>
            </div>
            <p className="text-muted-foreground">
              Conectamos talentos com as melhores empresas do Brasil. Sua carreira dos sonhos está a um clique de distância.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Para Candidatos */}
          <div>
            <h4 className="font-semibold mb-4">Para Candidatos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/buscar-vagas" className="text-muted-foreground hover:text-primary transition-colors">Buscar Vagas</Link></li>
              <li><Link to="/criar-perfil" className="text-muted-foreground hover:text-primary transition-colors">Criar Perfil</Link></li>
              <li><Link to="/dicas-carreira" className="text-muted-foreground hover:text-primary transition-colors">Dicas de Carreira</Link></li>
              <li><Link to="/salarios" className="text-muted-foreground hover:text-primary transition-colors">Salários</Link></li>
              <li><Link to="/empresas" className="text-muted-foreground hover:text-primary transition-colors">Empresas</Link></li>
            </ul>
          </div>

          {/* Para Empresas */}
          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2">
              <li><Link to="/publicar-vaga" className="text-muted-foreground hover:text-primary transition-colors">Publicar Vaga</Link></li>
              <li><Link to="/buscar-candidatos" className="text-muted-foreground hover:text-primary transition-colors">Buscar Candidatos</Link></li>
              <li><Link to="/planos" className="text-muted-foreground hover:text-primary transition-colors">Planos</Link></li>
              <li><Link to="/ferramentas" className="text-muted-foreground hover:text-primary transition-colors">Ferramentas</Link></li>
              <li><Link to="/suporte" className="text-muted-foreground hover:text-primary transition-colors">Suporte</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                contato@vagasdetrabalhos.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                (11) 99736-1698
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © Copyright 2025 | Vagas de Trabalhos | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DanielOlimpio
              </a>
            </p>
            <div className="flex gap-6">
              <Link to="/politica-de-uso" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;