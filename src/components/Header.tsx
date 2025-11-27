import { LogOut, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logo.png");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setLogoSrc(currentTheme === "dark" ? "/logo-dark.png" : "/logo.png");
  }, [theme, resolvedTheme]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logout", description: "Você saiu da conta." });
    navigate("/");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
              <img
                src={logoSrc}
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
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="gap-2"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
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