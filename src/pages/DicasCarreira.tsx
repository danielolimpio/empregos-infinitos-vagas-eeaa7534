import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { categories } from "@/data/articles";

const DicasCarreira = () => {

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dicas de Carreira",
      "description": "Dicas e orientações profissionais para impulsionar sua carreira e encontrar as melhores oportunidades de trabalho.",
      "url": "https://vagasdetrabalhos.com/dicas-carreira"
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": category.name,
          "description": category.description
        }
      }))
    }
  ];

  return (
    <>
      <SEO
        title="Dicas de Carreira | Guias e Orientações Profissionais"
        description="Encontre dicas valiosas para impulsionar sua carreira. Orientações sobre currículo, entrevistas, networking e desenvolvimento profissional."
        canonical="https://vagasdetrabalhos.com/dicas-carreira"
        keywords="dicas de carreira, orientação profissional, como fazer currículo, preparação entrevista emprego, networking profissional"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumbs items={[
          { label: "Dicas de Carreira" }
        ]} />
        
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
                <h2 className="text-2xl font-semibold mb-6">Explore por Categoria</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <Link 
                        key={category.id} 
                        to={`/dicas-carreira/categoria/${category.id}`}
                        className="block"
                      >
                        <Card className="hover:shadow-lg transition-shadow h-full">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className="p-3 rounded-lg bg-primary/10">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <CardTitle className="text-lg">{category.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{category.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
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
            </div>

            <aside className="hidden lg:block w-80">
              <div className="sticky top-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Categorias</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Link
                          key={category.id}
                          to={`/dicas-carreira/categoria/${category.id}`}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <IconComponent className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </Link>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DicasCarreira;
