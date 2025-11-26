import { LogOut, User } from "lucide-react";
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
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
              <img
                src="/lovable-uploads/0fb39e57-ff37-438d-945d-7b1bc027b381.png"
                alt="Logo Vagas de Trabalhos - vagas de emprego no Brasil"
                width={160}
                height={40}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Vagas de Trabalhos</span>
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/empresas")}>
              Sobre
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/ferramentas")}>
              Ferramentas
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/planos")}>
              Planos
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/publicar-vaga")}>
              Publicar Vaga
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/buscar-candidatos")}>
              Candidatos
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/salarios")}>
              Salários
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/empresas")}>
              Empresas
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/dicas-carreira")}>
              Blog
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/suporte")}>
              Contato
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/dashboard")}>
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
      </div>
    </header>
  );
};

export default Header;