import { useState, useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import type { JobFilters } from "@/pages/BuscarVagas";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
};

type JobListProps = {
  filters?: JobFilters;
};

const JobList = ({ filters }: JobListProps) => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("recent");

  // Carregar vagas aprovadas do banco de dados
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Transformar dados do banco para o formato do JobCard
        const transformedJobs: Job[] = (data || []).map((job) => {
          const now = new Date();
          const created = new Date(job.created_at);
          const diffDays = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
          
          let posted = "";
          if (diffDays === 0) posted = "hoje";
          else if (diffDays === 1) posted = "há 1 dia";
          else if (diffDays < 7) posted = `há ${diffDays} dias`;
          else if (diffDays < 30) posted = `há ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
          else posted = `há ${Math.floor(diffDays / 30)} mês${Math.floor(diffDays / 30) > 1 ? 'es' : ''}`;

          return {
            id: job.id,
            title: job.title,
            company: job.company_name,
            location: job.location,
            type: job.type,
            salary: job.salary || "A combinar",
            posted,
            description: job.description,
            requirements: job.requirements ? job.requirements.split(",").map(r => r.trim()) : [],
          };
        });

        setJobs(transformedJobs);
      } catch (error) {
        console.error("Erro ao carregar vagas:", error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar as vagas. Tente novamente.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [toast]);

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
          if (type === "integral") return job.type.includes("Presencial") || job.type.includes("Remoto") || job.type.includes("Híbrido");
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Carregando vagas...</span>
      </div>
    );
  }

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

      {sortedJobs.length > 0 && (
        <div className="text-center py-8">
          <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Voltar ao topo
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobList;