import { Search, MapPin, TrendingUp, Users, Building, Briefcase, UserCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import diversityBackground from "@/assets/diversity-background.jpg";
const HeroSection = () => {
  const stats = [{
    icon: Building,
    label: "Empresas",
    value: "5.000+",
    gradient: "from-blue-400 to-cyan-400"
  }, {
    icon: UserCheck,
    label: "Candidatos",
    value: "50.000+",
    gradient: "from-green-400 to-emerald-400"
  }, {
    icon: Target,
    label: "Vagas Ativas",
    value: "15.000+",
    gradient: "from-purple-400 to-pink-400"
  }];
  const popularSearches = [
    { name: "Desenvolvedor React", bg: "bg-gradient-to-r from-blue-500 to-cyan-500", border: "border-blue-400", hover: "hover:from-blue-600 hover:to-cyan-600" },
    { name: "Designer UX/UI", bg: "bg-gradient-to-r from-purple-500 to-pink-500", border: "border-purple-400", hover: "hover:from-purple-600 hover:to-pink-600" },
    { name: "Analista de Dados", bg: "bg-gradient-to-r from-green-500 to-emerald-500", border: "border-green-400", hover: "hover:from-green-600 hover:to-emerald-600" },
    { name: "Gerente de Projetos", bg: "bg-gradient-to-r from-red-500 to-orange-500", border: "border-red-400", hover: "hover:from-red-600 hover:to-orange-600" },
    { name: "Desenvolvedor Backend", bg: "bg-gradient-to-r from-indigo-500 to-blue-600", border: "border-indigo-400", hover: "hover:from-indigo-600 hover:to-blue-700" },
    { name: "Marketing Digital", bg: "bg-gradient-to-r from-orange-500 to-yellow-500", border: "border-orange-400", hover: "hover:from-orange-600 hover:to-yellow-600" }
  ];
   return <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${diversityBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-secondary/90"></div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Encontre sua próxima{" "}
            <span className="bg-clip-text bg-gradient-primary text-slate-50">
              oportunidade
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            Conectamos talentos com as melhores empresas do Brasil. Sua carreira dos sonhos está a um clique de distância.
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/30">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <Input placeholder="Qual vaga você está procurando?" className="pl-12 pr-4 h-14 bg-white/20 border-white/40 text-white placeholder:text-white focus:border-white text-lg" />
              </div>
              <div className="relative md:w-64">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <Input placeholder="Onde?" className="pl-12 pr-4 h-14 bg-white/20 border-white/40 text-white placeholder:text-white focus:border-white text-lg" />
              </div>
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 h-14 px-8 font-semibold">
                Buscar Vagas
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mb-12">
            <p className="text-white mb-4">Buscas populares:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((search, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  className={`${search.bg} ${search.border} ${search.hover} border-2 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm`}
                >
                  {search.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/30 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1 drop-shadow-sm">{stat.value}</p>
                  <p className="text-white font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;