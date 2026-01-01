import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  Users, 
  FileText, 
  Building, 
  DollarSign, 
  BookOpen, 
  Settings, 
  HelpCircle,
  Shield,
  Cookie,
  Scale,
  UserPlus,
  LogIn,
  LayoutDashboard,
  Map,
  ChevronRight,
  Folder
} from "lucide-react";
import { categories } from "@/data/articles";

const Sitemap = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - Mapa do Site",
    "description": "Mapa completo do site Vagas de Trabalhos com todas as páginas, categorias e recursos disponíveis.",
    "url": "https://vagasdetrabalhos.com/sitemap",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Vagas de Trabalhos",
      "url": "https://vagasdetrabalhos.com"
    }
  };

  const siteStructure = [
    {
      title: "Páginas Principais",
      icon: Home,
      description: "Navegação principal do site",
      links: [
        { name: "Página Inicial", url: "/", icon: Home },
        { name: "Buscar Vagas", url: "/buscar-vagas", icon: Briefcase },
        { name: "Empresas", url: "/empresas", icon: Building },
        { name: "Salários", url: "/salarios", icon: DollarSign },
      ]
    },
    {
      title: "Para Candidatos",
      icon: Users,
      description: "Recursos e ferramentas para profissionais",
      links: [
        { name: "Criar Perfil", url: "/criar-perfil", icon: UserPlus },
        { name: "Dicas de Carreira", url: "/dicas-carreira", icon: BookOpen },
        { name: "Login", url: "/login", icon: LogIn },
        { name: "Cadastro", url: "/cadastro", icon: UserPlus },
        { name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      ]
    },
    {
      title: "Para Empresas",
      icon: Building,
      description: "Soluções para recrutadores e RH",
      links: [
        { name: "Publicar Vaga", url: "/publicar-vaga", icon: Briefcase },
        { name: "Buscar Candidatos", url: "/buscar-candidatos", icon: Users },
        { name: "Planos e Preços", url: "/planos", icon: DollarSign },
        { name: "Ferramentas", url: "/ferramentas", icon: Settings },
        { name: "Suporte", url: "/suporte", icon: HelpCircle },
      ]
    },
    {
      title: "Categorias de Artigos",
      icon: Folder,
      description: "Conteúdo organizado por tema",
      links: categories.map(cat => ({
        name: cat.name,
        url: `/dicas-carreira?categoria=${cat.id}`,
        icon: cat.icon,
        description: cat.description
      }))
    },
    {
      title: "Páginas Legais",
      icon: Scale,
      description: "Políticas e termos do site",
      links: [
        { name: "Termos de Uso", url: "/politica-de-uso", icon: FileText },
        { name: "Política de Privacidade", url: "/politica-de-privacidade", icon: Shield },
        { name: "Política de Cookies", url: "/politica-de-cookies", icon: Cookie },
      ]
    },
    {
      title: "Recursos Adicionais",
      icon: Map,
      description: "Outros recursos do site",
      links: [
        { name: "Sitemap", url: "/sitemap", icon: Map },
      ]
    },
  ];

  const allUrls = [
    { url: "/", name: "Página Inicial" },
    { url: "/buscar-vagas", name: "Buscar Vagas" },
    { url: "/empresas", name: "Empresas" },
    { url: "/salarios", name: "Guia de Salários" },
    { url: "/criar-perfil", name: "Criar Perfil" },
    { url: "/dicas-carreira", name: "Dicas de Carreira" },
    { url: "/login", name: "Login" },
    { url: "/cadastro", name: "Cadastro" },
    { url: "/dashboard", name: "Dashboard" },
    { url: "/publicar-vaga", name: "Publicar Vaga" },
    { url: "/buscar-candidatos", name: "Buscar Candidatos" },
    { url: "/planos", name: "Planos e Preços" },
    { url: "/ferramentas", name: "Ferramentas" },
    { url: "/suporte", name: "Suporte" },
    { url: "/politica-de-uso", name: "Termos de Uso" },
    { url: "/politica-de-privacidade", name: "Política de Privacidade" },
    { url: "/politica-de-cookies", name: "Política de Cookies" },
    { url: "/sitemap", name: "Sitemap" },
    ...categories.map(cat => ({ url: `/dicas-carreira?categoria=${cat.id}`, name: `Artigos: ${cat.name}` })),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sitemap - Mapa do Site | Vagas de Trabalhos"
        description="Navegue pelo mapa completo do site Vagas de Trabalhos. Encontre todas as páginas, categorias de artigos, recursos para candidatos e empresas."
        canonical="https://vagasdetrabalhos.com/sitemap"
        structuredData={structuredData}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: "Sitemap", href: "/sitemap" }
          ]} 
        />

        {/* Hero Section */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Map className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mapa do Site
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navegue por todas as páginas e recursos disponíveis no Vagas de Trabalhos
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">{allUrls.length}</div>
              <div className="text-sm text-muted-foreground">Total de Páginas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Para Candidatos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Para Empresas</div>
            </CardContent>
          </Card>
        </div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteStructure.map((section, index) => {
            const SectionIcon = section.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <SectionIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => {
                      const LinkIcon = link.icon;
                      return (
                        <li key={linkIndex}>
                          <Link 
                            to={link.url}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group py-1"
                          >
                            <LinkIcon className="w-4 h-4" />
                            <span className="flex-1">{link.name}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Complete URL List */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Lista Completa de URLs
            </CardTitle>
            <p className="text-muted-foreground">
              Todas as {allUrls.length} páginas do site em formato de lista
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {allUrls.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors text-sm"
                >
                  <ChevronRight className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* XML Sitemap Link */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Sitemap XML</h3>
                  <p className="text-sm text-muted-foreground">
                    Para mecanismos de busca e ferramentas de SEO
                  </p>
                </div>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver sitemap.xml
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
