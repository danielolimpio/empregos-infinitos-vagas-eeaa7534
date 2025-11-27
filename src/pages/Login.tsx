import React, { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginValues>({ 
    resolver: zodResolver(loginSchema), 
    defaultValues: { email: "", password: "" } 
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  async function onSubmit(values: LoginValues) {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast({
            title: "Erro",
            description: "E-mail ou senha incorretos.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Erro no login",
            description: error.message,
            variant: "destructive",
          });
        }
        return;
      }

      if (data.user) {
        // Buscar perfil do usuário para verificar tipo de conta
        const { data: profile } = await supabase
          .from("profiles")
          .select("account_type")
          .eq("id", data.user.id)
          .single();

        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta!",
        });

        // Redirecionar baseado no tipo de conta
        setTimeout(() => {
          if (profile?.account_type === "recruiter") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }, 1000);
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao fazer login. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Login | Vagas de Trabalhos" 
        description="Área restrita para usuários cadastrados." 
        canonical="https://vagasdetrabalhos.com/login"
        isPrivatePage={true}
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mx-auto w-full max-w-md rounded-lg border bg-card p-6 shadow-sm">
          <header className="mb-6 text-center">
            <h1 className="text-xl font-semibold">Entrar</h1>
            <p className="text-sm text-muted-foreground">Acesse sua conta</p>
          </header>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="voce@exemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Sua senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Não tem conta? <a className="underline" href="/cadastro">Cadastre-se</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
