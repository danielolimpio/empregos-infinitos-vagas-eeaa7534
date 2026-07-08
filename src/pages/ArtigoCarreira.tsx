import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { useToast } from "@/hooks/use-toast";

const ArtigoCarreira = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    if (!article) {
      navigate("/dicas-carreira");
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  const relatedArticles = getRelatedArticles(article.slug);
  const articleUrl = `https://vagasdetrabalhos.com/dicas-carreira/${article.slug}`;

  const handleShare = (platform: string) => {
    const text = encodeURIComponent(article.title);
    const url = encodeURIComponent(articleUrl);
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "copy":
        navigator.clipboard.writeText(articleUrl);
        toast({ title: "Link copiado!", description: "O link do artigo foi copiado para a área de transferência." });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const IconComponent = article.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": `https://vagasdetrabalhos.com${article.image}`,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "VagasTrabalhos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vagasdetrabalhos.com/favicon.ico"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.updatedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  return (
    <>
      <SEO
        title={`${article.title} | Dicas de Carreira`}
        description={article.description}
        canonical={articleUrl}
        keywords={article.keywords}
        image={`https://vagasdetrabalhos.com${article.image}`}
        structuredData={structuredData}
        ogType="article"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumbs items={[
          { label: "Dicas de Carreira", href: "/dicas-carreira" },
          { label: article.title }
        ]} />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="text-base">
                {article.category}
              </Badge>
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedDate).toLocaleDateString('pt-BR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="gap-2"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
                className="gap-2"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
                className="gap-2"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("copy")}
                className="gap-2"
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-8">
              {article.content.introduction}
            </p>

            {article.content.sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.tips && section.tips.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-base">
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Conclusão</h3>
              <p className="text-base leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-muted/50 rounded-lg p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Encontre Sua Próxima Oportunidade
            </h3>
            <p className="text-muted-foreground mb-6">
              Coloque essas dicas em prática e busque as melhores vagas de emprego
            </p>
            <Button size="lg" onClick={() => navigate("/buscar-vagas")}>
              Buscar Vagas de Emprego
            </Button>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => {
                  const RelatedIcon = related.icon;
                  return (
                    <Link
                      key={related.slug}
                      to={`/dicas-carreira/${related.slug}`}
                      className="block"
                    >
                      <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{related.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {related.readTime}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <RelatedIcon className="w-6 h-6 text-primary" />
                            <CardTitle className="text-base">{related.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="line-clamp-2">
                            {related.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="text-center">
            <Button variant="outline" onClick={() => navigate("/dicas-carreira")}>
              Ver Todos os Artigos
            </Button>
          </div>
        </article>
        
        <Footer />
      </div>
    </>
  );
};

export default ArtigoCarreira;
