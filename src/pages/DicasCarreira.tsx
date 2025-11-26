import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CurriculoCard from "@/components/CurriculoCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, TrendingUp, Target, Lightbulb, Users } from "lucide-react";

const DicasCarreira = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dicas de Carreira",
    "description": "Dicas e orientações profissionais para impulsionar sua carreira e encontrar as melhores oportunidades de trabalho.",
    "url": "https://vagasdetrabalhos.com/dicas-carreira"
  };

  const articles = [
    {
      title: "Como Criar um Currículo que Atrai Recrutadores",
      description: "Aprenda as melhores práticas para destacar suas experiências e habilidades no currículo.",
      category: "Currículo",
      readTime: "5 min",
      icon: Target
    },
    {
      title: "Preparação para Entrevistas de Emprego",
      description: "Dicas essenciais para se destacar nas entrevistas e conquistar a vaga dos seus sonhos.",
      category: "Entrevista",
      readTime: "7 min",
      icon: Users
    },
    {
      title: "Networking: Como Construir uma Rede Profissional",
      description: "Estratégias para ampliar sua rede de contatos e encontrar novas oportunidades.",
      category: "Networking",
      readTime: "6 min",
      icon: Users
    },
    {
      title: "Negociação Salarial: Como Pedir Aumento",
      description: "Técnicas para negociar salário e benefícios de forma eficaz e profissional.",
      category: "Salário",
      readTime: "8 min",
      icon: TrendingUp
    },
    {
      title: "Transição de Carreira: Mudando de Área",
      description: "Guia completo para quem deseja mudar de área profissional com segurança.",
      category: "Carreira",
      readTime: "10 min",
      icon: Target
    },
    {
      title: "Habilidades do Futuro: O que Desenvolver",
      description: "As competências mais valorizadas pelo mercado de trabalho atual e futuro.",
      category: "Desenvolvimento",
      readTime: "6 min",
      icon: Lightbulb
    }
  ];

  return (
    <>
      <SEO
        title="Dicas de Carreira | Guias e Orientações Profissionais"
        description="Encontre dicas valiosas para impulsionar sua carreira. Orientações sobre currículo, entrevistas, networking e desenvolvimento profissional."
        canonical="https://vagasdetrabalhos.com/dicas-carreira"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Dicas de Carreira</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Orientações e estratégias para impulsionar sua carreira profissional
            </p>
          </header>

          <div className="flex gap-8">
            <div className="flex-1">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Artigos em Destaque</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {articles.map((article, index) => {
                    const IconComponent = article.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-8 h-8 text-primary" />
                            <CardTitle className="text-lg">{article.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{article.description}</CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-primary/5 rounded-lg p-8 text-center">
                  <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Receba Dicas Semanais</h2>
                  <p className="text-muted-foreground mb-6">
                    Cadastre-se para receber dicas exclusivas de carreira diretamente no seu e-mail
                  </p>
                  <div className="max-w-md mx-auto flex gap-4">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      Inscrever
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">Categorias</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Currículo", "Entrevista", "Networking", "Carreira", "Salário", "Desenvolvimento", "Liderança", "Produtividade"].map((category) => (
                    <Card key={category} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold">{category}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <aside className="hidden lg:block w-80">
              <CurriculoCard />
            </aside>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DicasCarreira;
