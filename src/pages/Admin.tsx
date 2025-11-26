import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plus, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { brazilianStates, citiesByState, jobTypes } from "@/data/locations";
import { JobApprovalList } from "@/components/admin/JobApprovalList";

// Tipos e validação
const jobSchema = z.object({
  titulo: z.string().min(3, "Informe um título"),
  profissao: z.string().min(1, "Informe a especialização"),
  estado: z.string().min(1, "Selecione o estado"),
  municipio: z.string().min(2, "Informe o município"),
  periodo: z.string().min(1, "Selecione o período"),
  salario: z.string().optional(),
  escolaridade: z.string().min(1, "Selecione a escolaridade"),
  experiencia: z.string().min(1, "Informe o tempo de experiência"),
  aceitaOutraCidade: z.boolean().default(false),
  aceitaOutroEstado: z.boolean().default(false),
  qualificacoes: z.string().optional(),
  descricao: z.string().optional(),
  dataLimite: z.date({ required_error: "Informe a data limite" }),
});

type JobFormValues = z.infer<typeof jobSchema>;

const Admin: React.FC = () => {
  const { toast } = useToast();
  const [selectedState, setSelectedState] = React.useState<string>("");
  const [profissoes, setProfissoes] = React.useState<string[]>([
    "Desenvolvedor(a)",
    "Designer",
    "Analista de Dados",
  ]);

  const [pendentes, setPendentes] = React.useState(
    Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      titulo: `Vaga #${i + 1}`,
      empresa: "Empresa X",
      enviadaPor: "usuario@example.com",
      data: new Date().toLocaleDateString(),
    }))
  );

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      titulo: "",
      profissao: "",
      estado: "",
      municipio: "",
      periodo: "",
      salario: "",
      escolaridade: "",
      experiencia: "",
      aceitaOutraCidade: false,
      aceitaOutroEstado: false,
      qualificacoes: "",
      descricao: "",
      dataLimite: undefined,
    },
  });

  const availableCities = selectedState ? citiesByState[selectedState] || [] : [];

  React.useEffect(() => {
    // noindex para evitar indexação do admin
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
    return () => {
      // opcional: restaurar para index,follow apenas se existia antes
    };
  }, []);

  function onSubmit(values: JobFormValues) {
    // Aqui futuramente salvar em Supabase
    toast({
      title: "Vaga salva (rascunho)",
      description: `${values.titulo} — ${values.profissao} em ${values.municipio}`,
    });
    form.reset();
  }

  function adicionarProfissao(nome: string) {
    if (!nome.trim()) return;
    if (profissoes.includes(nome)) {
      toast({ title: "Profissão já existente" });
      return;
    }
    setProfissoes((p) => [...p, nome]);
    toast({ title: "Profissão adicionada", description: nome });
  }

  function aprovar(id: number) {
    setPendentes((p) => p.filter((v) => v.id !== id));
    toast({ title: "Vaga aprovada", description: `ID ${id}` });
  }

  function rejeitar(id: number) {
    setPendentes((p) => p.filter((v) => v.id !== id));
    toast({ title: "Vaga rejeitada", description: `ID ${id}` });
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Admin | Vagas de Trabalhos"
        description="Administre vagas, profissões e aprovações."
        canonical="https://vagasdetrabalhos.com/admin"
      />
      <Header />
      <main className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">Administrador</h1>
          <p className="text-muted-foreground">Gerencie vagas, profissões e aprovações de publicações.</p>
        </header>

        <Tabs defaultValue="vagas" className="w-full">
          <TabsList>
            <TabsTrigger value="vagas">Vagas</TabsTrigger>
            <TabsTrigger value="profissoes">Profissões</TabsTrigger>
            <TabsTrigger value="aprovacoes">Aprovações</TabsTrigger>
          </TabsList>

          <TabsContent value="vagas" className="mt-6">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <article className="lg:col-span-2">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="text-lg font-medium mb-4">Cadastrar vaga</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="titulo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Título da vaga</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex.: Desenvolvedor(a) Front-end" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="profissao"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Especialização</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex.: React, Machine Learning, UX/UI Design" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="estado"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estado</FormLabel>
                              <Select value={field.value} onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedState(value);
                                form.setValue("municipio", ""); // Reset municipality when state changes
                              }}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione o estado" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {brazilianStates.map((state) => (
                                    <SelectItem key={state.value} value={state.value}>
                                      {state.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="municipio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Município</FormLabel>
                              <Select value={field.value} onValueChange={field.onChange} disabled={!selectedState}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione o município" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="remoto">Remoto</SelectItem>
                                  <SelectItem value="hibrido">Híbrido</SelectItem>
                                  <SelectItem value="internacional">Internacional</SelectItem>
                                  {availableCities.map((city) => (
                                    <SelectItem key={city.value} value={city.value}>
                                      {city.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="periodo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo de Trabalho</FormLabel>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione o tipo" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {jobTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="salario"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Salário (opcional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Ex.: R$ 5.000,00" {...field} />
                              </FormControl>
                              <FormDescription>Informe o valor bruto mensal ou faixa.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="escolaridade"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Escolaridade exigida</FormLabel>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione a escolaridade" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="fundamental">Fundamental</SelectItem>
                                  <SelectItem value="medio">Médio</SelectItem>
                                  <SelectItem value="tecnico">Técnico</SelectItem>
                                  <SelectItem value="superior">Superior</SelectItem>
                                  <SelectItem value="pos">Pós-graduação</SelectItem>
                                  <SelectItem value="mestrado">Mestrado</SelectItem>
                                  <SelectItem value="doutorado">Doutorado</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="experiencia"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tempo de experiência</FormLabel>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="sem-experiencia">Sem experiência</SelectItem>
                                  <SelectItem value="6m">Até 6 meses</SelectItem>
                                  <SelectItem value="1-2">1–2 anos</SelectItem>
                                  <SelectItem value="3-5">3–5 anos</SelectItem>
                                  <SelectItem value="5+">5+ anos</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="aceitaOutraCidade"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-md border p-4">
                              <div>
                                <FormLabel>Aceita trabalhar em outra cidade?</FormLabel>
                                <FormDescription>Disponibilidade para mudança de município.</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="aceitaOutroEstado"
                          render={({ field }) => (
                            <FormItem className="flex items-center justify-between rounded-md border p-4">
                              <div>
                                <FormLabel>Aceita trabalhar em outro estado?</FormLabel>
                                <FormDescription>Disponibilidade para mudança de UF.</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="qualificacoes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Qualificações exigidas</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Ex.: React, TypeScript, APIs REST (separe por vírgulas)" rows={3} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="descricao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Descrição da vaga</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Fale sobre responsabilidades, benefícios, etc." rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dataLimite"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Data limite para se candidatar</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      field.value.toLocaleDateString()
                                    ) : (
                                      <span>Escolha a data</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>Após essa data a vaga será ocultada.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3">
                        <Button type="submit">Salvar vaga</Button>
                        <Button type="button" variant="secondary">Salvar como rascunho</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </article>

              <aside>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-medium mb-3">Ajuda rápida</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Profissão define a área/categoria da vaga.</li>
                    <li>Use qualificações separadas por vírgulas.</li>
                    <li>Data limite controla o prazo de candidatura.</li>
                  </ul>
                </div>
              </aside>
            </section>
          </TabsContent>

          <TabsContent value="profissoes" className="mt-6">
            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-medium mb-4">Gerenciar profissões</h2>
              <ProfissoesForm onAdd={adicionarProfissao} />
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {profissoes.map((p) => (
                  <div key={p} className="rounded-md border px-3 py-2 text-sm flex items-center justify-between">
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="aprovacoes" className="mt-6">
            <JobApprovalList />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

const ProfissoesForm: React.FC<{ onAdd: (nome: string) => void }> = ({ onAdd }) => {
  const [nome, setNome] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(nome.trim());
        setNome("");
      }}
      className="flex gap-2"
    >
      <Input
        placeholder="Nova profissão (ex.: Engenheiro(a) Civil)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button type="submit" className="inline-flex items-center gap-2">
        <Plus className="h-4 w-4" /> Adicionar
      </Button>
    </form>
  );
};

export default Admin;
