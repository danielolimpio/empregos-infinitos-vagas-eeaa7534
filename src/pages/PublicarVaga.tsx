import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PublicarVaga = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Publicar Vaga de Emprego",
    "description": "Publique vagas de emprego e encontre os melhores candidatos. Alcance milhares de profissionais qualificados.",
    "url": "https://vagasdetrabalhos.com/publicar-vaga"
  };

  const features = [
    {
      icon: Target,
      title: "Alcance Qualificado",
      description: "Sua vaga será vista por milhares de candidatos qualificados em nossa plataforma"
    },
    {
      icon: TrendingUp,
      title: "Resultados Rápidos",
      description: "Receba candidaturas em até 24 horas após a publicação da vaga"
    },
    {
      icon: Users,
      title: "Filtros Inteligentes",
      description: "Sistema de matching que conecta sua vaga aos candidatos ideais"
    },
    {
      icon: Clock,
      title: "Gestão Simplificada",
      description: "Painel completo para gerenciar candidaturas e processo seletivo"
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "Gratuito",
      duration: "30 dias",
      features: [
        "1 vaga ativa",
        "Recebimento de candidaturas",
        "Visualização de perfis básicos",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 97",
      duration: "por vaga/mês",
      features: [
        "Vagas ilimitadas",
        "Perfis completos dos candidatos",
        "Filtros avançados de busca",
        "Suporte prioritário",
        "Analytics detalhados",
        "Destaque nas pesquisas"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "R$ 297",
      duration: "por mês",
      features: [
        "Tudo do Profissional",
        "Múltiplos usuários",
        "Banco de talentos",
        "API de integração",
        "Gerente de conta dedicado",
        "Relatórios personalizados"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO
        title="Publicar Vaga de Emprego | Encontre os Melhores Candidatos"
        description="Publique vagas de emprego e encontre candidatos qualificados. Alcance milhares de profissionais e acelere seu processo de recrutamento."
        canonical="https://vagasdetrabalhos.com/publicar-vaga"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Publicar Vaga de Emprego</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre os melhores candidatos para sua empresa
            </p>
            <Link to="/admin">
              <Button size="lg" className="text-lg px-8 py-6">
                <Briefcase className="w-5 h-5 mr-2" />
                Publicar Primeira Vaga Grátis
              </Button>
            </Link>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Por que Escolher Nossa Plataforma?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Planos de Publicação</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription>{plan.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <Link to="/admin">
                        Escolher Plano
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">Crie sua Vaga</h3>
                      <p className="text-sm text-muted-foreground">Preencha os detalhes da posição com título, descrição e requisitos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">Publique e Promova</h3>
                      <p className="text-sm text-muted-foreground">Sua vaga ficará visível para milhares de candidatos qualificados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">Receba Candidaturas</h3>
                      <p className="text-sm text-muted-foreground">Analise perfis e gerencie todo o processo seletivo em nossa plataforma</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-sm text-muted-foreground">Taxa de Preenchimento</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">3 dias</div>
                        <div className="text-sm text-muted-foreground">Tempo Médio</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-sm text-muted-foreground">Candidatos/Vaga</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">1000+</div>
                        <div className="text-sm text-muted-foreground">Empresas Ativas</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Pronto para Começar?</h2>
              <p className="text-muted-foreground mb-6">
                Publique sua primeira vaga gratuitamente e veja a qualidade dos nossos candidatos
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/admin">
                  <Button size="lg">Publicar Vaga Grátis</Button>
                </Link>
                <Button variant="outline" size="lg">Falar com Especialista</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PublicarVaga;