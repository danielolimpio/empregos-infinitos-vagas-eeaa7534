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

const cadastroSchema = z
  .object({
    name: z.string().min(3, "Informe seu nome completo"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirm: z.string().min(6, "Mínimo 6 caracteres"),
    tipo: z.enum(["candidato", "recrutador"], { required_error: "Selecione um tipo" }),
  })
  .refine((d) => d.password === d.confirm, {
    path: ["confirm"],
    message: "As senhas não coincidem",
  });

type CadastroValues = z.infer<typeof cadastroSchema>;

const Cadastro: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<CadastroValues>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: { name: "", email: "", password: "", confirm: "", tipo: undefined as any },
  });

  function onSubmit(values: CadastroValues) {
    toast({ title: "Cadastro", description: `Conta (${values.tipo}) criada para ${values.email} (simulado)` });
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Cadastro | Vagas de Trabalhos" description="Crie sua conta de candidato ou recrutador." canonical="https://vagasdetrabalhos.com/cadastro" />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mx-auto w-full max-w-md rounded-lg border bg-card p-6 shadow-sm">
          <header className="mb-6 text-center">
            <h1 className="text-xl font-semibold">Criar conta</h1>
            <p className="text-sm text-muted-foreground">É rápido e gratuito</p>
          </header>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="tipo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sou</FormLabel>
                    <FormControl>
                      <select className="w-full rounded-md border bg-background px-3 py-2" value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value)}>
                        <option value="" disabled>Selecione</option>
                        <option value="candidato">Candidato</option>
                        <option value="recrutador">Recrutador</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                      <Input type="password" placeholder="Crie uma senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Repita a senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">Criar conta</Button>
            </form>
          </Form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Já tem conta? <a className="underline" href="/login">Entrar</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cadastro;
