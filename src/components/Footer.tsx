import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
                <img
                  src="/lovable-uploads/0fb39e57-ff37-438d-945d-7b1bc027b381.png"
                  alt="Logo Vagas de Trabalhos - vagas de emprego"
                  width={160}
                  height={40}
                  className="h-8 w-auto"
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
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Buscar Vagas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Criar Perfil</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dicas de Carreira</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Salários</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Empresas</a></li>
            </ul>
          </div>

          {/* Para Empresas */}
          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Publicar Vaga</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Buscar Candidatos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ferramentas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suporte</a></li>
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
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 VagasTrabalhos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;