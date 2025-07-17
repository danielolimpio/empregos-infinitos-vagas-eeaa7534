import { Search, MapPin, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VagasTrabalhos
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-2xl mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Pesquisar vagas, empresas, cargos..."
                className="pl-10 pr-4 h-11 border-2 border-muted focus:border-primary"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Localização"
                className="pl-10 pr-4 h-11 w-40 border-2 border-muted focus:border-primary"
              />
            </div>
            <Button variant="hero" size="lg" className="h-11">
              Buscar
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Para Empresas
            </Button>
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button variant="default" size="sm">
              Cadastrar
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Pesquisar vagas..."
                className="pl-10 pr-4 h-11 border-2 border-muted focus:border-primary"
              />
            </div>
            <Button variant="hero" size="lg" className="h-11">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;