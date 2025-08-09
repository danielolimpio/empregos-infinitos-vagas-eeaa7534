import React from "react";
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

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type LoginValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<LoginValues>({ resolver: zodResolver(loginSchema), defaultValues: { email: "", password: "" } });

  function onSubmit(values: LoginValues) {
    toast({ title: "Login", description: `Simulando login para ${values.email}` });
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Login | Vagas de Trabalhos" description="Acesse sua conta para gerenciar candidaturas e vagas." canonical="https://vagasdetrabalhos.com/login" />
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
              <Button className="w-full" type="submit">Entrar</Button>
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
