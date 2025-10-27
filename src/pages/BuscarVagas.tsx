import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import JobFilters from "@/components/JobFilters";
import JobList from "@/components/JobList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export type JobFilters = {
  searchQuery: string;
  jobTypes: string[];
  locations: string[];
  salaryRanges: string[];
  companies: string[];
};

const BuscarVagas = () => {
  const [filters, setFilters] = useState<JobFilters>({
    searchQuery: "",
    jobTypes: [],
    locations: [],
    salaryRanges: [],
    companies: [],
  });
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Buscar Vagas de Emprego",
    "description": "Encontre as melhores vagas de emprego no Brasil. Busque por área, localização e tipo de trabalho.",
    "url": "https://vagasdetrabalhos.com/buscar-vagas"
  };

  return (
    <>
      <SEO
        title="Buscar Vagas de Emprego | Encontre sua Oportunidade Ideal"
        description="Procure vagas de emprego em todo o Brasil. Filtros avançados por área, salário, localização e tipo de trabalho. Encontre sua próxima oportunidade profissional."
        canonical="https://vagasdetrabalhos.com/buscar-vagas"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Buscar Vagas de Emprego</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre as melhores oportunidades de carreira em todo o Brasil
            </p>
            
            <div className="max-w-2xl mx-auto flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Busque por cargo, empresa ou palavra-chave..."
                  className="pl-10"
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                />
              </div>
              <Button size="lg" onClick={() => {}}>Buscar Vagas</Button>
            </div>
          </header>

          <div className="flex gap-8">
            <aside className="hidden lg:block">
              <JobFilters filters={filters} setFilters={setFilters} />
            </aside>
            <div className="flex-1">
              <JobList filters={filters} />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BuscarVagas;