import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Target, 
  Brain, 
  Globe,
  Zap,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";

const Ferramentas = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ferramentas de Recrutamento",
    "description": "Conheça nossas ferramentas avançadas para otimizar seu processo de recrutamento e seleção de candidatos.",
    "url": "https://vagasdetrabalhos.com/ferramentas"
  };

  const tools = [
    {
      icon: Brain,
      name: "IA de Matching",
      description: "Algoritmo inteligente que conecta automaticamente as vagas aos candidatos ideais",
      features: ["Matching automático", "Score de compatibilidade", "Recomendações personalizadas"],
      category: "IA"
    },
    {
      icon: BarChart3,
      name: "Analytics Avançado",
      description: "Relatórios detalhados sobre o desempenho das suas vagas e processo seletivo",
      features: ["Métricas em tempo real", "Relatórios customizados", "Dashboards interativos"],
      category: "Análise"
    },
    {
      icon: Users,
      name: "Banco de Talentos",
      description: "Organize e mantenha contato com candidatos para futuras oportunidades",
      features: ["Busca avançada", "Tags personalizadas", "Histórico completo"],
      category: "Gestão"
    },
    {
      icon: MessageSquare,
      name: "Chat Integrado",
      description: "Comunique-se diretamente com candidatos através da plataforma",
      features: ["Mensagens em tempo real", "Notificações push", "Histórico de conversas"],
      category: "Comunicação"
    },
    {
      icon: FileText,
      name: "Análise de Currículos",
      description: "Extração automática de informações e análise de compatibilidade",
      features: ["Parsing inteligente", "Verificação de dados", "Ranking automático"],
      category: "IA"
    },
    {
      icon: Calendar,
      name: "Agendamento",
      description: "Agende entrevistas e acompanhe todo o pipeline de candidatos",
      features: ["Calendário integrado", "Lembretes automáticos", "Sincronização externa"],
      category: "Produtividade"
    },
    {
      icon: Target,
      name: "Triagem Automática",
      description: "Filtre candidatos automaticamente baseado em critérios pré-definidos",
      features: ["Questões eliminatórias", "Pontuação automática", "Aprovação rápida"],
      category: "Automação"
    },
    {
      icon: Globe,
      name: "API de Integração",
      description: "Integre com seus sistemas de RH e ATS existentes",
      features: ["REST API completa", "Webhooks", "Documentação detalhada"],
      category: "Integração"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Mais Velocidade",
      description: "Reduza o tempo de contratação em até 60%"
    },
    {
      icon: Shield,
      title: "Mais Qualidade",
      description: "Encontre candidatos 3x mais qualificados"
    },
    {
      icon: Clock,
      title: "Menos Trabalho",
      description: "Automatize 80% do processo de triagem"
    },
    {
      icon: CheckCircle,
      title: "Melhores Resultados",
      description: "95% de taxa de aprovação dos contratados"
    }
  ];

  return (
    <>
      <SEO
        title="Ferramentas de Recrutamento | Tecnologia para RH e Seleção"
        description="Conheça nossas ferramentas avançadas de recrutamento. IA, analytics, automação e integração para otimizar sua seleção de candidatos."
        canonical="https://vagasdetrabalhos.com/ferramentas"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Ferramentas de Recrutamento</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tecnologia avançada para otimizar seu processo de contratação
            </p>
            <Badge variant="secondary" className="text-sm">
              🚀 Todas as ferramentas incluídas nos planos pagos
            </Badge>
          </header>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Ferramentas Disponíveis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {tool.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-4">
                        Saiba Mais
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Processo Otimizado</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">Publique sua Vaga</h3>
                      <p className="text-sm text-muted-foreground">Nossa IA otimiza automaticamente a descrição para atrair os melhores candidatos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">Triagem Inteligente</h3>
                      <p className="text-sm text-muted-foreground">Candidatos são automaticamente filtrados e ranqueados por compatibilidade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">Análise e Contratação</h3>
                      <p className="text-sm text-muted-foreground">Use analytics para tomar decisões baseadas em dados e contrate mais rápido</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">IA Revolucionária</h3>
                    <p className="text-muted-foreground mb-4">
                      Nossa inteligência artificial aprende com cada contratação para melhorar continuamente o matching entre vagas e candidatos.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <div className="text-2xl font-bold text-primary">94%</div>
                        <div className="text-sm text-muted-foreground">Precisão do Match</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">60%</div>
                        <div className="text-sm text-muted-foreground">Menos Tempo</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">3x</div>
                        <div className="text-sm text-muted-foreground">Mais Qualidade</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24h</div>
                        <div className="text-sm text-muted-foreground">Primeiras Respostas</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Integrações Disponíveis</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {["Workday", "BambooHR", "Greenhouse", "Lever", "JazzHR", "SmartRecruiters", "Jobvite", "iCIMS"].map((integration) => (
                <Card key={integration} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{integration}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Pronto para Revolucionar seu RH?</h2>
              <p className="text-muted-foreground mb-6">
                Teste todas nossas ferramentas gratuitamente por 7 dias
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">Começar Teste Grátis</Button>
                <Button variant="outline" size="lg">Agendar Demo</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Ferramentas;