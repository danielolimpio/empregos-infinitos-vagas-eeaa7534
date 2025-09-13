import { Search, MapPin, TrendingUp, Users, Building, Briefcase, UserCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
const HeroSection = () => {
  const stats = [{
    icon: Building,
    label: "Empresas",
    value: "5.000+",
    color: "text-[hsl(204_100%_59%)]"
  }, {
    icon: UserCheck,
    label: "Candidatos",
    value: "50.000+",
    color: "text-[hsl(142_69%_58%)]"
  }, {
    icon: Target,
    label: "Vagas Ativas",
    value: "15.000+",
    color: "text-[hsl(348_83%_47%)]"
  }];
  const popularSearches = [
    { name: "Desenvolvedor React", color: "bg-[hsl(214_100%_59%)] hover:bg-[hsl(214_100%_54%)]" },
    { name: "Designer UX/UI", color: "bg-[hsl(280_100%_70%)] hover:bg-[hsl(280_100%_65%)]" },
    { name: "Analista de Dados", color: "bg-[hsl(142_69%_58%)] hover:bg-[hsl(142_69%_53%)]" },
    { name: "Gerente de Projetos", color: "bg-[hsl(348_83%_47%)] hover:bg-[hsl(348_83%_42%)]" },
    { name: "Desenvolvedor Backend", color: "bg-[hsl(204_100%_59%)] hover:bg-[hsl(204_100%_54%)]" },
    { name: "Marketing Digital", color: "bg-[hsl(25_95%_53%)] hover:bg-[hsl(25_95%_48%)]" }
  ];
  return <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Encontre sua próxima{" "}
            <span className="bg-clip-text bg-gradient-primary text-slate-50">
              oportunidade
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Conectamos talentos com as melhores empresas do Brasil. Sua carreira dos sonhos está a um clique de distância.
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input placeholder="Qual vaga você está procurando?" className="pl-12 pr-4 h-14 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50 text-lg" />
              </div>
              <div className="relative md:w-64">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input placeholder="Onde?" className="pl-12 pr-4 h-14 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50 text-lg" />
              </div>
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 h-14 px-8 font-semibold">
                Buscar Vagas
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mb-12">
            <p className="text-white/80 mb-4">Buscas populares:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((search, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  className={`${search.color} border-transparent text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105`}
                >
                  {search.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/80">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;