import { LogOut, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 border-b border-border">
      {/* Top eyebrow bar */}
      <div className="hidden md:block border-b border-border">
        <div className="container mx-auto px-4 h-9 flex items-center justify-between font-mono text-[10px] font-medium tracking-[0.26em] uppercase text-muted-foreground">
          <span className="inline-flex items-center gap-3">
            <span className="inline-block w-1 h-1 bg-foreground" />
            Portal Nacional de Carreiras
          </span>
          <span className="inline-flex items-center gap-3">
            Edição {new Date().getFullYear()}
            <span className="inline-block w-px h-3 bg-border" />
            {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center" aria-label="Vagas de Trabalhos - Página inicial">
              <img
                src={logoSrc}
                alt="Logo Vagas de Trabalhos - vagas de emprego no Brasil"
                width={160}
                height={40}
                className="h-8 sm:h-10 md:h-11 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Vagas de Trabalhos</span>
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-0 text-[13px]">
            {[
              { label: "Home", to: "/" },
              { label: "Vagas", to: "/buscar-vagas" },
              { label: "Ferramentas", to: "/ferramentas" },
              { label: "Publicar Vaga", to: "/publicar-vaga" },
              { label: "Candidatos", to: "/buscar-candidatos" },
              { label: "Salários", to: "/salarios" },
              { label: "Empresas", to: "/empresas" },
              { label: "Blog", to: "/dicas-carreira" },
              { label: "Contato", to: "/suporte" },
            ].map((item, i, arr) => (
              <div key={item.to} className="flex items-center">
                <button
                  onClick={() => navigate(item.to)}
                  className="px-3 py-2 text-foreground/75 hover:text-foreground border-b-2 border-transparent hover:border-foreground transition-colors font-mono uppercase text-[10px] tracking-[0.22em] font-medium"
                >
                  {item.label}
                </button>
                {i < arr.length - 1 && <span className="w-px h-3 bg-border/70" />}
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="gap-2 rounded-none"
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
            </Button>
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2 rounded-none uppercase text-[11px] tracking-[0.14em] font-semibold" onClick={() => navigate("/dashboard")}>
                  <User className="h-4 w-4" strokeWidth={1.5} />
                  {user.email?.split("@")[0]}
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 rounded-none border-foreground uppercase text-[11px] tracking-[0.14em] font-semibold">
                  <LogOut className="h-4 w-4" strokeWidth={1.5} />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate("/login")} className="rounded-none border-foreground uppercase text-[11px] tracking-[0.14em] font-semibold">
                  Entrar
                </Button>
                <Button size="sm" onClick={() => navigate("/cadastro")} className="rounded-none bg-foreground text-background hover:bg-foreground/90 uppercase text-[11px] tracking-[0.14em] font-semibold">
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