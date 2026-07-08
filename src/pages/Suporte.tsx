import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  BookOpen, 
  Video,
  FileText,
  Users,
  Zap
} from "lucide-react";

const Suporte = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Suporte ao Cliente",
      "description": "Central de ajuda e suporte técnico. Tire suas dúvidas e receba assistência para usar nossa plataforma de recrutamento.",
      "url": "https://vagasdetrabalhos.com/suporte"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat Online",
      description: "Suporte em tempo real durante horário comercial",
      availability: "Seg-Sex: 8h às 18h",
      response: "Resposta imediata",
      action: "Iniciar Chat"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue para nossa central de atendimento",
      availability: "(11) 99736-1698",
      response: "Horário comercial",
      action: "Ligar Agora"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envie sua dúvida detalhada por email",
      availability: "suporte@vagasdetrabalhos.com",
      response: "Até 2 horas úteis",
      action: "Enviar Email"
    }
  ];

  const helpResources = [
    {
      icon: BookOpen,
      title: "Base de Conhecimento",
      description: "Artigos e tutoriais completos sobre como usar a plataforma",
      articles: "150+ artigos"
    },
    {
      icon: Video,
      title: "Vídeo Tutoriais",
      description: "Aprenda visualmente com nossos guias em vídeo",
      articles: "25+ vídeos"
    },
    {
      icon: FileText,
      title: "Documentação da API",
      description: "Guias técnicos para desenvolvedores e integrações",
      articles: "Docs completa"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fórum de usuários para trocar experiências e dicas",
      articles: "500+ membros"
    }
  ];

  const faqItems = [
    {
      question: "Como publico minha primeira vaga?",
      answer: "Acesse o painel administrativo, clique em 'Cadastrar Vaga', preencha os detalhes da posição e publique. Sua primeira vaga é gratuita!"
    },
    {
      question: "Como funciona o matching de candidatos?",
      answer: "Nossa IA analisa o perfil dos candidatos e os requisitos da vaga, criando um score de compatibilidade para facilitar sua seleção."
    },
    {
      question: "Posso editar uma vaga depois de publicada?",
      answer: "Sim, você pode editar informações da vaga a qualquer momento através do painel de controle."
    },
    {
      question: "Como entro em contato com os candidatos?",
      answer: "Use nosso sistema de mensagens integrado ou acesse os dados de contato dos candidatos que se candidataram às suas vagas."
    },
    {
      question: "Qual a diferença entre os planos?",
      answer: "O plano gratuito permite 1 vaga ativa, o Profissional oferece 5 vagas e recursos avançados, e o Empresarial tem vagas ilimitadas e suporte dedicado."
    }
  ];

  return (
    <>
      <SEO
        title="Central de Suporte | Ajuda e Atendimento ao Cliente"
        description="Central de ajuda completa com chat online, telefone, email e base de conhecimento. Tire suas dúvidas sobre nossa plataforma de recrutamento."
        canonical="https://vagasdetrabalhos.com/suporte"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Central de Suporte</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos aqui para ajudar você a ter sucesso na nossa plataforma
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Como Podemos Ajudar?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle>{channel.title}</CardTitle>
                      <CardDescription>{channel.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-medium">{channel.availability}</p>
                        <p className="text-sm text-muted-foreground">{channel.response}</p>
                      </div>
                      <Button className="w-full">{channel.action}</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription>
                    Descreva sua dúvida ou problema e nossa equipe responderá rapidamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Nome</label>
                        <Input placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tipo de Solicitação</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Problema Técnico</SelectItem>
                          <SelectItem value="billing">Dúvida sobre Planos</SelectItem>
                          <SelectItem value="feature">Sugestão de Funcionalidade</SelectItem>
                          <SelectItem value="general">Dúvida Geral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mensagem</label>
                      <Textarea 
                        placeholder="Descreva sua dúvida ou problema em detalhes..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Horários de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Segunda a Sexta</span>
                        <span className="font-medium">8h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span className="font-medium">9h às 13h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Status do Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Plataforma Principal</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600">Operacional</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>API</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600">Operacional</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Sistema de Emails</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600">Operacional</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Ver Histórico Completo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Recursos de Ajuda</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                      <p className="text-xs text-primary font-medium">{resource.articles}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-center mb-8">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver Todas as Perguntas
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Suporte;