import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Search, Home, ArrowLeft, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Página Não Encontrada - 404",
    "description": "A página que você procura não foi encontrada. Explore nossas vagas de emprego e oportunidades.",
    "url": `https://vagasdetrabalhos.com${location.pathname}`
  };

  return (
    <>
      <SEO
        title="Página Não Encontrada - 404 | Vagas de Trabalhos"
        description="A página que você está procurando não existe. Explore milhares de vagas de emprego e oportunidades de carreira."
        canonical={`https://vagasdetrabalhos.com/404`}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <Breadcrumbs items={[
          { label: "Página Não Encontrada" }
        ]} />
        
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Building className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                  Oops! A página que você está procurando não existe ou foi movida. Mas não se preocupe,
                  temos milhares de vagas e oportunidades esperando por você!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                    className="flex items-center gap-2"
                  >
                    <Link to="/">
                      <Home className="w-5 h-5" />
                      Voltar ao Início
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Página Anterior
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    Ou explore estas categorias populares:
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/buscar-vagas?q=desenvolvedor">
                        <Search className="w-4 h-4 mr-2" />
                        Desenvolvedor
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/buscar-vagas?q=designer">
                        <Search className="w-4 h-4 mr-2" />
                        Designer
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/buscar-vagas?q=marketing">
                        <Search className="w-4 h-4 mr-2" />
                        Marketing
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/buscar-vagas?q=vendas">
                        <Search className="w-4 h-4 mr-2" />
                        Vendas
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <Button variant="link" asChild>
                      <Link to="/buscar-vagas">Buscar Vagas</Link>
                    </Button>
                    <Button variant="link" asChild>
                      <Link to="/empresas">Empresas</Link>
                    </Button>
                    <Button variant="link" asChild>
                      <Link to="/dicas-carreira">Dicas de Carreira</Link>
                    </Button>
                    <Button variant="link" asChild>
                      <Link to="/salarios">Guia de Salários</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
