import { Search, MapPin, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logout", description: "Você saiu da conta." });
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
              <img
                src="/lovable-uploads/0fb39e57-ff37-438d-945d-7b1bc027b381.png"
                alt="Logo Vagas de Trabalhos - vagas de emprego no Brasil"
                width={160}
                height={40}
                className="h-12 w-auto"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Vagas de Trabalhos</span>
            </a>
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
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {user.email?.split("@")[0]}
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate("/login")}>
                  Entrar
                </Button>
                <Button variant="default" size="sm" onClick={() => navigate("/cadastro")}>
                  Cadastrar
                </Button>
              </>
            )}
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