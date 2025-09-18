import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, MapPin, Briefcase, DollarSign } from "lucide-react";

const Salarios = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Guia de Salários por Profissão",
    "description": "Consulte salários médios por profissão, cidade e experiência. Compare remunerações e negocie melhor seu salário.",
    "url": "https://vagasdetrabalhos.com/salarios"
  };

  const salaryData = [
    {
      role: "Desenvolvedor Full Stack",
      location: "São Paulo, SP",
      experience: "Pleno",
      salary: "R$ 8.500",
      range: "R$ 7.000 - R$ 12.000",
      trend: "up"
    },
    {
      role: "Analista de Marketing",
      location: "Rio de Janeiro, RJ",
      experience: "Sênior",
      salary: "R$ 6.800",
      range: "R$ 5.500 - R$ 9.000",
      trend: "up"
    },
    {
      role: "Designer UX/UI",
      location: "Belo Horizonte, MG",
      experience: "Pleno",
      salary: "R$ 5.200",
      range: "R$ 4.000 - R$ 7.500",
      trend: "stable"
    },
    {
      role: "Gerente de Vendas",
      location: "Porto Alegre, RS",
      experience: "Sênior",
      salary: "R$ 9.500",
      range: "R$ 7.500 - R$ 15.000",
      trend: "up"
    },
    {
      role: "Analista Financeiro",
      location: "Brasília, DF",
      experience: "Júnior",
      salary: "R$ 4.200",
      range: "R$ 3.500 - R$ 5.800",
      trend: "stable"
    },
    {
      role: "Engenheiro de Software",
      location: "Florianópolis, SC",
      experience: "Sênior",
      salary: "R$ 12.000",
      range: "R$ 9.000 - R$ 18.000",
      trend: "up"
    }
  ];

  return (
    <>
      <SEO
        title="Guia de Salários 2024 | Salários Médios por Profissão no Brasil"
        description="Consulte salários médios atualizados por profissão, experiência e localização. Compare remunerações e prepare-se para negociar seu salário."
        canonical="https://vagasdetrabalhos.com/salarios"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Guia de Salários 2024</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Consulte salários médios por profissão e prepare-se para negociar melhor
            </p>
          </header>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Pesquisar Salários
                </CardTitle>
                <CardDescription>
                  Encontre informações salariais específicas para sua área e região
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cargo ou Profissão</label>
                    <Input placeholder="Ex: Desenvolvedor, Analista..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Localização</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">São Paulo, SP</SelectItem>
                        <SelectItem value="rj">Rio de Janeiro, RJ</SelectItem>
                        <SelectItem value="bh">Belo Horizonte, MG</SelectItem>
                        <SelectItem value="poa">Porto Alegre, RS</SelectItem>
                        <SelectItem value="bsb">Brasília, DF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Experiência</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nível de experiência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Júnior (0-2 anos)</SelectItem>
                        <SelectItem value="pleno">Pleno (3-5 anos)</SelectItem>
                        <SelectItem value="senior">Sênior (5+ anos)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-4" size="lg">
                  <Search className="w-4 h-4 mr-2" />
                  Pesquisar Salários
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Salários em Destaque</h2>
            </div>
            <div className="grid gap-4">
              {salaryData.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-muted-foreground" />
                          <h3 className="font-semibold">{item.role}</h3>
                          <Badge variant={item.experience === 'Júnior' ? 'secondary' : item.experience === 'Pleno' ? 'default' : 'destructive'}>
                            {item.experience}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                          <DollarSign className="w-5 h-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">{item.salary}</span>
                          {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                        </div>
                        <p className="text-sm text-muted-foreground">Faixa: {item.range}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dicas para Negociação</CardTitle>
                <CardDescription>Como usar essas informações a seu favor</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Pesquise salários de empresas similares na sua região
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Considere benefícios além do salário base
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Documente suas conquistas e resultados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Escolha o momento certo para a conversa
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metodologia</CardTitle>
                <CardDescription>Como calculamos os salários</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Dados coletados de milhares de profissionais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Atualizações mensais das informações
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Filtros por experiência, empresa e localização
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Verificação e validação dos dados
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Salarios;