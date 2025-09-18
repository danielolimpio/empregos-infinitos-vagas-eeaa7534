import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Crown, Zap, Building2 } from "lucide-react";

const Planos = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Planos de Recrutamento",
    "description": "Escolha o plano ideal para sua empresa. Publique vagas, encontre candidatos e acelere seu processo de recrutamento.",
    "url": "https://vagasdetrabalhos.com/planos"
  };

  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "para sempre",
      icon: Zap,
      description: "Ideal para testar nossa plataforma",
      features: [
        { text: "1 vaga ativa por vez", included: true },
        { text: "Recebimento de candidaturas", included: true },
        { text: "Perfis básicos dos candidatos", included: true },
        { text: "Suporte por email", included: true },
        { text: "Filtros avançados", included: false },
        { text: "Analytics detalhados", included: false },
        { text: "Múltiplos usuários", included: false },
        { text: "API de integração", included: false }
      ],
      buttonText: "Começar Grátis",
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 197",
      period: "por mês",
      icon: Crown,
      description: "Para empresas que contratam regularmente",
      features: [
        { text: "5 vagas ativas simultâneas", included: true },
        { text: "Perfis completos dos candidatos", included: true },
        { text: "Filtros avançados de busca", included: true },
        { text: "Analytics e relatórios", included: true },
        { text: "Destaque nas pesquisas", included: true },
        { text: "Suporte prioritário", included: true },
        { text: "Múltiplos usuários (até 3)", included: true },
        { text: "API de integração", included: false }
      ],
      buttonText: "Assinar Agora",
      popular: true
    },
    {
      name: "Empresarial",
      price: "R$ 497",
      period: "por mês",
      icon: Building2,
      description: "Para grandes empresas e RHs",
      features: [
        { text: "Vagas ilimitadas", included: true },
        { text: "Banco de talentos completo", included: true },
        { text: "Filtros e busca avançada", included: true },
        { text: "Analytics personalizados", included: true },
        { text: "Prioridade máxima", included: true },
        { text: "Gerente de conta dedicado", included: true },
        { text: "Usuários ilimitados", included: true },
        { text: "API completa + integração", included: true }
      ],
      buttonText: "Falar com Vendas",
      popular: false
    }
  ];

  const addons = [
    {
      name: "Destaque Premium",
      price: "R$ 97/vaga",
      description: "Sua vaga aparece nos primeiros resultados por 30 dias"
    },
    {
      name: "Divulgação em Redes Sociais",
      price: "R$ 147/vaga",
      description: "Promovemos sua vaga em nossas redes sociais"
    },
    {
      name: "Headhunting Personalizado",
      price: "R$ 997/vaga",
      description: "Nossa equipe busca candidatos específicos para você"
    }
  ];

  return (
    <>
      <SEO
        title="Planos de Recrutamento | Escolha o Ideal para sua Empresa"
        description="Compare nossos planos de recrutamento. Publique vagas, acesse candidatos qualificados e acelere suas contratações com ferramentas profissionais."
        canonical="https://vagasdetrabalhos.com/planos"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Planos de Recrutamento</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha o plano ideal para suas necessidades de contratação
            </p>
            <Badge variant="secondary" className="text-sm">
              📞 Teste gratuito de 7 dias em todos os planos pagos
            </Badge>
          </header>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Mais Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <CardDescription>{plan.period}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            {feature.included ? (
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                            <span className={`text-sm ${!feature.included ? 'text-muted-foreground line-through' : ''}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant={plan.popular ? "default" : "outline"} 
                        className="w-full"
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Serviços Adicionais</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{addon.description}</CardDescription>
                    <Button variant="outline" className="w-full">
                      Contratar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h4>
                      <p className="text-sm text-muted-foreground">Sim, você pode cancelar seu plano a qualquer momento sem multas ou taxas de cancelamento.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Como funciona o teste gratuito?</h4>
                      <p className="text-sm text-muted-foreground">7 dias grátis com acesso completo ao plano escolhido. Cancele antes do fim do período e não será cobrado.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Posso mudar de plano depois?</h4>
                      <p className="text-sm text-muted-foreground">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Precisa de Ajuda?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">📞 Fale com Nossa Equipe</h4>
                      <p className="text-sm text-muted-foreground mb-2">Nossa equipe está pronta para ajudar você a escolher o melhor plano.</p>
                      <Button variant="outline" className="w-full">
                        Agendar Conversa
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">💬 Chat Online</h4>
                      <p className="text-sm text-muted-foreground mb-2">Tire suas dúvidas em tempo real com nosso suporte.</p>
                      <Button variant="outline" className="w-full">
                        Iniciar Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Não Encontrou o que Procura?</h2>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para criar um plano personalizado para sua empresa
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">Plano Personalizado</Button>
                <Button variant="outline" size="lg">Falar com Vendas</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Planos;