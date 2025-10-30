import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Users, MapPin, Briefcase, GraduationCap, Star } from "lucide-react";

const BuscarCandidatos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Buscar Candidatos Qualificados",
    "description": "Encontre e contrate os melhores talentos do mercado. Acesse milhares de perfis qualificados para sua empresa.",
    "url": "https://vagasdetrabalhos.com/buscar-candidatos"
  };

  const candidates = [
    {
      name: "Ana Silva",
      title: "Desenvolvedora Full Stack",
      experience: "5 anos",
      location: "São Paulo, SP",
      skills: ["React", "Node.js", "Python", "AWS"],
      education: "Ciência da Computação",
      rating: 4.8,
      available: true
    },
    {
      name: "Carlos Santos",
      title: "Designer UX/UI",
      experience: "3 anos",
      location: "Rio de Janeiro, RJ",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      education: "Design Gráfico",
      rating: 4.9,
      available: true
    },
    {
      name: "Marina Costa",
      title: "Gerente de Marketing",
      experience: "7 anos",
      location: "Belo Horizonte, MG",
      skills: ["Marketing Digital", "Google Ads", "Analytics", "SEO"],
      education: "Marketing",
      rating: 4.7,
      available: false
    },
    {
      name: "Roberto Lima",
      title: "Analista Financeiro",
      experience: "4 anos",
      location: "Porto Alegre, RS",
      skills: ["Excel Avançado", "Power BI", "Valuation", "Controladoria"],
      education: "Administração",
      rating: 4.6,
      available: true
    }
  ];

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          candidate.name.toLowerCase().includes(query) ||
          candidate.title.toLowerCase().includes(query) ||
          candidate.skills.some(skill => skill.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      if (selectedLocation && selectedLocation !== "all" && !candidate.location.includes(selectedLocation)) {
        return false;
      }

      if (selectedExperience && selectedExperience !== "all") {
        const years = parseInt(candidate.experience);
        if (selectedExperience === "junior" && years > 2) return false;
        if (selectedExperience === "pleno" && (years < 3 || years > 5)) return false;
        if (selectedExperience === "senior" && years < 5) return false;
      }

      if (selectedAvailability && selectedAvailability !== "all") {
        if (selectedAvailability === "available" && !candidate.available) return false;
        if (selectedAvailability === "employed" && candidate.available) return false;
      }

      return true;
    });
  }, [searchQuery, selectedLocation, selectedExperience, selectedAvailability]);

  const handleSearch = () => {
    // The filtering happens automatically via useMemo
  };

  return (
    <>
      <SEO
        title="Buscar Candidatos | Encontre Talentos Qualificados para sua Empresa"
        description="Encontre e contrate os melhores profissionais do mercado. Acesse milhares de perfis qualificados e acelere seu processo de recrutamento."
        canonical="https://vagasdetrabalhos.com/buscar-candidatos"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Buscar Candidatos</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre os melhores talentos para sua empresa
            </p>
          </header>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Filtros de Busca
                </CardTitle>
                <CardDescription>
                  Use os filtros para encontrar candidatos específicos para suas necessidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cargo ou Habilidade</label>
                    <Input 
                      placeholder="Ex: Desenvolvedor, Marketing..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Localização</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="São Paulo, SP">São Paulo, SP</SelectItem>
                        <SelectItem value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</SelectItem>
                        <SelectItem value="Belo Horizonte, MG">Belo Horizonte, MG</SelectItem>
                        <SelectItem value="Porto Alegre, RS">Porto Alegre, RS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Experiência</label>
                    <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                      <SelectTrigger>
                        <SelectValue placeholder="Anos de experiência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="junior">Júnior (0-2 anos)</SelectItem>
                        <SelectItem value="pleno">Pleno (3-5 anos)</SelectItem>
                        <SelectItem value="senior">Sênior (5+ anos)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Disponibilidade</label>
                    <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="available">Disponível</SelectItem>
                        <SelectItem value="employed">Empregado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-4" size="lg" onClick={handleSearch}>
                  <Search className="w-4 h-4 mr-2" />
                  Buscar Candidatos
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Candidatos Recomendados</h2>
              </div>
              <Badge variant="secondary">
                {filteredCandidates.length} perfis encontrados
              </Badge>
            </div>
            
            {filteredCandidates.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum candidato encontrado com os filtros selecionados.
                </p>
                <p className="text-muted-foreground mt-2">
                  Tente ajustar seus filtros para ver mais resultados.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredCandidates.map((candidate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{candidate.name}</h3>
                            <p className="text-lg text-muted-foreground">{candidate.title}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{candidate.rating}</span>
                            <Badge variant={candidate.available ? "default" : "secondary"}>
                              {candidate.available ? "Disponível" : "Empregado"}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            {candidate.experience} de experiência
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {candidate.location}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            {candidate.education}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Principais Habilidades:</h4>
                          <div className="flex flex-wrap gap-2">
                            {candidate.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 lg:w-40">
                        <Button>Ver Perfil Completo</Button>
                        <Button variant="outline">Enviar Mensagem</Button>
                        <Button variant="outline">Salvar Candidato</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            )}
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">50.000+</h3>
                <p className="text-sm text-muted-foreground">Candidatos Ativos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Áreas Profissionais</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">4.8</h3>
                <p className="text-sm text-muted-foreground">Avaliação Média</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Acesso Premium</h2>
              <p className="text-muted-foreground mb-6">
                Tenha acesso completo aos perfis dos candidatos e ferramentas avançadas de recrutamento
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">Assinar Premium</Button>
                <Button variant="outline" size="lg">Testar Gratuitamente</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BuscarCandidatos;