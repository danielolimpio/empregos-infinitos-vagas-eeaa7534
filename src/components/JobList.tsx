import { useState, useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import type { JobFilters } from "@/pages/BuscarVagas";

// Mock data for demonstration
const mockJobs = [
  {
    id: "1",
    title: "Desenvolvedor Frontend React",
    company: "TechCorp",
    location: "São Paulo, SP",
    type: "Tempo Integral",
    salary: "R$ 8.000 - 12.000",
    posted: "há 2 dias",
    description: "Estamos procurando um desenvolvedor frontend experiente em React para integrar nossa equipe de desenvolvimento. Você trabalhará em projetos inovadores e desafiadores.",
    requirements: ["React", "TypeScript", "CSS", "JavaScript", "Git"],
  },
  {
    id: "2",
    title: "Designer UX/UI",
    company: "Design Studio",
    location: "Rio de Janeiro, RJ",
    type: "Tempo Integral",
    salary: "R$ 6.000 - 9.000",
    posted: "há 1 dia",
    description: "Buscamos um designer UX/UI criativo para criar interfaces incríveis e experiências de usuário memoráveis para nossos clientes.",
    requirements: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototipagem"],
  },
  {
    id: "3",
    title: "Desenvolvedor Backend Java",
    company: "Enterprise Solutions",
    location: "Remoto",
    type: "Tempo Integral",
    salary: "R$ 10.000 - 15.000",
    posted: "há 3 dias",
    description: "Desenvolvedor backend sênior para trabalhar com sistemas de grande escala usando Java e Spring Boot. Trabalho 100% remoto.",
    requirements: ["Java", "Spring Boot", "MySQL", "AWS", "Docker"],
  },
  {
    id: "4",
    title: "Analista de Dados",
    company: "DataTech",
    location: "Belo Horizonte, MG",
    type: "Tempo Integral",
    salary: "R$ 7.000 - 10.000",
    posted: "há 1 semana",
    description: "Analista de dados para extrair insights valiosos dos dados da empresa e apoiar decisões estratégicas.",
    requirements: ["Python", "SQL", "Power BI", "Excel", "Estatística"],
  },
  {
    id: "5",
    title: "Gerente de Projetos",
    company: "Project Management Co.",
    location: "São Paulo, SP",
    type: "Tempo Integral",
    salary: "R$ 12.000 - 18.000",
    posted: "há 4 dias",
    description: "Gerente de projetos experiente para liderar equipes multidisciplinares e garantir a entrega de projetos no prazo e dentro do orçamento.",
    requirements: ["PMP", "Scrum", "Gestão de Equipes", "Excel", "Comunicação"],
  },
  {
    id: "6",
    title: "Desenvolvedor Mobile Flutter",
    company: "MobileApp Inc.",
    location: "Híbrido - São Paulo",
    type: "Tempo Integral",
    salary: "R$ 9.000 - 13.000",
    posted: "há 2 dias",
    description: "Desenvolvedor mobile especializado em Flutter para criar aplicativos multiplataforma inovadores.",
    requirements: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
  },
];

type JobListProps = {
  filters?: JobFilters;
};

const JobList = ({ filters }: JobListProps) => {
  const [jobs, setJobs] = useState(mockJobs);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState("recent");

  const filteredJobs = useMemo(() => {
    if (!filters) return jobs;

    return jobs.filter((job) => {
      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Job type filter
      if (filters.jobTypes.length > 0) {
        const jobTypeMatch = filters.jobTypes.some(type => {
          if (type === "integral") return job.type === "Tempo Integral";
          if (type === "meio-periodo") return job.type === "Meio Período";
          if (type === "temporario") return job.type === "Temporário";
          if (type === "freelancer") return job.type === "Freelancer";
          if (type === "estagio") return job.type === "Estágio";
          return false;
        });
        if (!jobTypeMatch) return false;
      }

      // Location filter
      if (filters.locations.length > 0) {
        const locationMatch = filters.locations.some(loc => {
          if (loc === "remote") return job.location.toLowerCase().includes("remoto");
          if (loc === "hybrid") return job.location.toLowerCase().includes("híbrido");
          return job.location.toLowerCase().includes(loc);
        });
        if (!locationMatch) return false;
      }

      // Salary range filter
      if (filters.salaryRanges.length > 0) {
        const salaryMatch = filters.salaryRanges.some(range => {
          const salary = job.salary.toLowerCase();
          if (range === "1-3k") return salary.includes("1.") || salary.includes("2.") || salary.includes("3.");
          if (range === "3-5k") return salary.includes("3.") || salary.includes("4.") || salary.includes("5.");
          if (range === "5-8k") return salary.includes("5.") || salary.includes("6.") || salary.includes("7.") || salary.includes("8.");
          if (range === "8-12k") return salary.includes("8.") || salary.includes("9.") || salary.includes("10.") || salary.includes("11.") || salary.includes("12.");
          if (range === "12k+") return salary.includes("12.") || salary.includes("15.") || salary.includes("18.");
          return false;
        });
        if (!salaryMatch) return false;
      }

      // Company filter
      if (filters.companies.length > 0) {
        const companyMatch = filters.companies.some(comp => 
          job.company.toLowerCase().includes(comp)
        );
        if (!companyMatch) return false;
      }

      return true;
    });
  }, [jobs, filters]);

  const sortedJobs = useMemo(() => {
    const jobsCopy = [...filteredJobs];
    
    if (sortBy === "salary") {
      return jobsCopy.sort((a, b) => {
        const getMaxSalary = (salary: string) => {
          const match = salary.match(/(\d+\.?\d*)/g);
          return match ? Math.max(...match.map(Number)) : 0;
        };
        return getMaxSalary(b.salary) - getMaxSalary(a.salary);
      });
    } else if (sortBy === "company") {
      return jobsCopy.sort((a, b) => a.company.localeCompare(b.company));
    }
    
    return jobsCopy; // recent (default)
  }, [filteredJobs, sortBy]);

  // Simulate infinite scroll
  const loadMoreJobs = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newJobs = mockJobs.map((job, index) => ({
        ...job,
        id: `${job.id}-${Date.now()}-${index}`,
      }));
      
      setJobs(prev => [...prev, ...newJobs]);
      setLoading(false);
      
      // After 3 loads, simulate no more jobs
      if (jobs.length >= 18) {
        setHasMore(false);
      }
    }, 1000);
  };

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMoreJobs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [jobs.length, loading, hasMore]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {sortedJobs.length} vagas encontradas
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Ordenar por:</span>
          <select 
            className="bg-background border border-input rounded px-2 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Mais recentes</option>
            <option value="salary">Maior salário</option>
            <option value="company">Empresa</option>
          </select>
        </div>
      </div>

      {sortedJobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhuma vaga encontrada com os filtros selecionados.
          </p>
          <p className="text-muted-foreground mt-2">
            Tente ajustar seus filtros para ver mais resultados.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Carregando mais vagas...</span>
        </div>
      )}

      {!hasMore && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            Você chegou ao final das vagas disponíveis.
          </p>
          <Button variant="outline" className="mt-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Voltar ao topo
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobList;