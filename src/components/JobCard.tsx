import { useState, useEffect } from "react";
import { MapPin, Building, Clock, DollarSign, Bookmark, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ApplicationForm } from "@/components/applications/ApplicationForm";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
    requirements: string[];
    logo?: string;
  };
}

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const JobCard = ({ job }: JobCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  // Check if user has already applied on mount
  useEffect(() => {
    checkIfApplied();
  }, [job.id]);

  const checkIfApplied = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return false;

      const { data, error } = await supabase
        .from("applications")
        .select("id")
        .eq("job_id", job.id)
        .eq("candidate_id", user.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      return !!data;
    } catch (error) {
      console.error("Erro ao verificar candidatura:", error);
      return false;
    }
  };

  const handleApplyClick = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Faça login",
          description: "Você precisa estar logado para se candidatar a uma vaga.",
        });
        navigate("/login");
        return;
      }

      // Check if already applied
      const applied = await checkIfApplied();
      if (applied) {
        toast({
          title: "Você já se candidatou",
          description: "Você já enviou uma candidatura para esta vaga.",
        });
        setHasApplied(true);
        return;
      }

      setIsApplicationDialogOpen(true);
    } catch (error) {
      console.error("Erro:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro. Tente novamente.",
      });
    }
  };

  const handleApplicationSubmit = async (data: any) => {
    setIsApplying(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const { error } = await supabase.from("applications").insert({
        job_id: job.id,
        candidate_id: user.id,
        status: "pending",
        cover_letter: data.cover_letter,
        resume_url: data.resume_url || null,
        candidate_notes: data.candidate_notes || null,
      });

      if (error) throw error;

      toast({
        title: "Candidatura enviada!",
        description: "Sua candidatura foi enviada com sucesso. Boa sorte!",
      });

      setIsApplicationDialogOpen(false);
      setHasApplied(true);
    } catch (error: any) {
      console.error("Erro ao enviar candidatura:", error);
      
      if (error.code === "23505") {
        toast({
          variant: "destructive",
          title: "Você já se candidatou",
          description: "Você já enviou uma candidatura para esta vaga.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível enviar sua candidatura. Tente novamente.",
        });
      }
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <>
      <article className="group card-editorial p-6 md:p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-14 h-14 shrink-0 border border-foreground flex items-center justify-center bg-foreground text-background">
              <span className="font-serif text-xl font-semibold leading-none">
                {job.company?.charAt(0).toUpperCase() || "•"}
              </span>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-1.5">
                {job.company}
              </div>
              <h3 className="font-serif text-2xl md:text-[1.6rem] leading-tight text-foreground group-hover:underline underline-offset-4 decoration-1">
                {job.title}
              </h3>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0 rounded-none border border-transparent hover:border-border hover:bg-transparent">
            <Bookmark className="w-4 h-4" strokeWidth={1.5} />
          </Button>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-5 pb-5 border-b border-border">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
            {job.posted}
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
            <DollarSign className="w-3.5 h-3.5" strokeWidth={1.5} />
            {job.salary}
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="badge-editorial badge-editorial--solid">{job.type}</span>
          {job.requirements.slice(0, 3).map((req, index) => (
            <span key={index} className="badge-editorial">
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="badge-editorial badge-editorial--muted">
              +{job.requirements.length - 3}
            </span>
          )}
        </div>

        {/* Description */}
        <div
          className="text-[15px] leading-relaxed text-muted-foreground line-clamp-2 [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4 mb-6"
          dangerouslySetInnerHTML={{ __html: decodeHtml(job.description) }}
        />

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <Button
            variant="outline"
            className="flex-1 h-11 rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background uppercase text-xs tracking-[0.15em] font-semibold"
            onClick={() => navigate(`/vaga/${job.id}`)}
          >
            Ver Detalhes
          </Button>
          <Button
            className="flex-1 h-11 rounded-none bg-foreground text-background hover:bg-foreground/90 uppercase text-xs tracking-[0.15em] font-semibold"
            onClick={handleApplyClick}
            disabled={hasApplied}
          >
            {hasApplied ? "Candidatura Enviada" : "Candidatar-se"}
          </Button>
        </div>
      </article>

      <Dialog open={isApplicationDialogOpen} onOpenChange={setIsApplicationDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Candidatar-se à Vaga</DialogTitle>
          </DialogHeader>
          <ApplicationForm
            jobTitle={job.title}
            onSubmit={handleApplicationSubmit}
            onCancel={() => setIsApplicationDialogOpen(false)}
            isLoading={isApplying}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobCard;
