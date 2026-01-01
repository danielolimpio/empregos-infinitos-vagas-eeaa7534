import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { categories, getArticlesByCategory } from "@/data/articles";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const CategoriaCarreira = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return <NotFound />;
  }

  const articles = getArticlesByCategory(category.id);
  const IconComponent = category.icon;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${category.name} - Dicas de Carreira`,
      "description": category.description,
      "url": `https://vagasdetrabalhos.com/dicas-carreira/categoria/${category.id}`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vagas de Trabalhos",
        "url": "https://vagasdetrabalhos.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vagasdetrabalhos.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dicas de Carreira",
          "item": "https://vagasdetrabalhos.com/dicas-carreira"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category.name,
          "item": `https://vagasdetrabalhos.com/dicas-carreira/categoria/${category.id}`
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={`${category.name} | Dicas de Carreira - Vagas de Trabalhos`}
        description={`Artigos e dicas sobre ${category.name.toLowerCase()}: ${category.description}`}
        canonical={`https://vagasdetrabalhos.com/dicas-carreira/categoria/${category.id}`}
        keywords={`${category.name.toLowerCase()}, dicas de carreira, orientação profissional, emprego`}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumbs items={[
          { label: "Dicas de Carreira", href: "/dicas-carreira" },
          { label: category.name }
        ]} />
        
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {category.description}
            </p>
          </header>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <section className="mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => {
                  const ArticleIcon = article.icon;
                  return (
                    <Link 
                      key={article.slug} 
                      to={`/dicas-carreira/${article.slug}`}
                      className="block"
                    >
                      <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <ArticleIcon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : (
            <section className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Em breve novos artigos</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Estamos preparando conteúdo de qualidade sobre {category.name.toLowerCase()}. 
                Volte em breve para conferir!
              </p>
              <Button asChild>
                <Link to="/dicas-carreira" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para Dicas de Carreira
                </Link>
              </Button>
            </section>
          )}

          {/* Other Categories */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center">Explore outras categorias</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories
                .filter(c => c.id !== category.id)
                .map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <Link 
                      key={cat.id} 
                      to={`/dicas-carreira/categoria/${cat.id}`}
                      className="block"
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <CatIcon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-medium">{cat.name}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CategoriaCarreira;
