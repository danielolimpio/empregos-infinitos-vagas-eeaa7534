import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Briefcase, Building2, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CriarPerfil = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Criar Perfil Profissional",
    "description": "Crie seu perfil profissional gratuito e seja encontrado pelas melhores empresas do Brasil.",
    "url": "https://vagasdetrabalhos.com/criar-perfil"
  };

  return (
    <>
      <SEO
        title="Criar Perfil Profissional Gratuito | Seja Encontrado por Recrutadores"
        description="Crie seu perfil profissional gratuito e seja descoberto pelas melhores empresas. Destaque suas habilidades e experiências para recrutadores."
        canonical="https://vagasdetrabalhos.com/criar-perfil"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Crie seu Perfil Profissional</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Seja encontrado pelas melhores empresas do Brasil
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <UserPlus className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Perfil Completo</CardTitle>
                <CardDescription>
                  Monte um perfil detalhado com suas experiências, habilidades e objetivos profissionais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dados pessoais e contato</li>
                  <li>• Experiências profissionais</li>
                  <li>• Formação acadêmica</li>
                  <li>• Habilidades e competências</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Seja Descoberto</CardTitle>
                <CardDescription>
                  Recrutadores procuram candidatos como você todos os dias na nossa plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Visibilidade para recrutadores</li>
                  <li>• Oportunidades personalizadas</li>
                  <li>• Notificações de vagas</li>
                  <li>• Match com empresas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <section className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-6">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Cadastre-se</h3>
                <p className="text-sm text-muted-foreground">
                  Crie sua conta gratuitamente em poucos minutos
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Complete seu Perfil</h3>
                <p className="text-sm text-muted-foreground">
                  Adicione suas experiências e habilidades
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Seja Encontrado</h3>
                <p className="text-sm text-muted-foreground">
                  Receba oportunidades das melhores empresas
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link to="/cadastro">
              <Button size="lg" className="text-lg px-8 py-6">
                Criar Meu Perfil Gratuito
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              100% gratuito • Sem compromisso • Cancele quando quiser
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CriarPerfil;