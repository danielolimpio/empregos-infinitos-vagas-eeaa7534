import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Building2, MapPin, Users, Star, Briefcase } from "lucide-react";

const Empresas = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Empresas que Contratam",
    "description": "Conheça as melhores empresas para trabalhar no Brasil. Veja avaliações, benefícios e vagas disponíveis.",
    "url": "https://vagasdetrabalhos.com/empresas"
  };

  const companies = [
    {
      name: "TechCorp Brasil",
      industry: "Tecnologia",
      location: "São Paulo, SP",
      employees: "1.000 - 5.000",
      rating: 4.5,
      openJobs: 25,
      logo: "🏢",
      description: "Líder em soluções tecnológicas inovadoras para empresas de grande porte."
    },
    {
      name: "InnovateX",
      industry: "Software",
      location: "Rio de Janeiro, RJ",
      employees: "100 - 500",
      rating: 4.8,
      openJobs: 18,
      logo: "💻",
      description: "Startup focada em desenvolvimento de aplicações web e mobile."
    },
    {
      name: "HealthMed Soluções",
      industry: "Saúde",
      location: "Belo Horizonte, MG",
      employees: "500 - 1.000",
      rating: 4.3,
      openJobs: 12,
      logo: "🏥",
      description: "Empresa referência em tecnologia para o setor de saúde."
    },
    {
      name: "EcoGreen Energy",
      industry: "Energia",
      location: "Porto Alegre, RS",
      employees: "200 - 500",
      rating: 4.6,
      openJobs: 8,
      logo: "🌱",
      description: "Especializada em soluções de energia renovável e sustentabilidade."
    },
    {
      name: "FinanceMax",
      industry: "Financeiro",
      location: "Brasília, DF",
      employees: "1.000+",
      rating: 4.2,
      openJobs: 15,
      logo: "💰",
      description: "Instituição financeira moderna com foco em inovação digital."
    },
    {
      name: "CreativeStudio",
      industry: "Marketing",
      location: "Florianópolis, SC",
      employees: "50 - 100",
      rating: 4.7,
      openJobs: 6,
      logo: "🎨",
      description: "Agência criativa especializada em marketing digital e branding."
    }
  ];

  return (
    <>
      <SEO
        title="Melhores Empresas para Trabalhar | Conheça Empregadores Top"
        description="Descubra as melhores empresas para trabalhar no Brasil. Veja avaliações dos funcionários, benefícios oferecidos e vagas disponíveis."
        canonical="https://vagasdetrabalhos.com/empresas"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Empresas que Contratam</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conheça as melhores empresas para trabalhar no Brasil
            </p>
            
            <div className="max-w-2xl mx-auto flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Busque por empresa ou setor..."
                  className="pl-10"
                />
              </div>
              <Button size="lg">Buscar Empresas</Button>
            </div>
          </header>

          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Empresas em Destaque</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{company.logo}</span>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{company.industry}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{company.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{company.description}</CardDescription>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {company.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {company.employees} funcionários
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-4 h-4" />
                        {company.openJobs} vagas abertas
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Ver Perfil da Empresa
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">500+</h3>
                <p className="text-sm text-muted-foreground">Empresas Cadastradas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">2.500+</h3>
                <p className="text-sm text-muted-foreground">Vagas Ativas</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">10.000+</h3>
                <p className="text-sm text-muted-foreground">Contratações Realizadas</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Sua Empresa Aqui</h2>
              <p className="text-muted-foreground mb-6">
                Cadastre sua empresa e encontre os melhores talentos do mercado
              </p>
              <div className="flex gap-4 justify-center">
                <Button>Cadastrar Empresa</Button>
                <Button variant="outline">Saiba Mais</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Empresas;