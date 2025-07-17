import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Search, Home, ArrowLeft, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
            <p className="text-muted-foreground mb-8">
              Oops! A página que você está procurando não existe. Mas não se preocupe,
              temos milhares de vagas esperando por você!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.location.href = "/"}
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Voltar ao Início
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Página Anterior
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Ou busque por vagas específicas:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm">Desenvolvedor</Button>
              <Button variant="ghost" size="sm">Designer</Button>
              <Button variant="ghost" size="sm">Marketing</Button>
              <Button variant="ghost" size="sm">Vendas</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
