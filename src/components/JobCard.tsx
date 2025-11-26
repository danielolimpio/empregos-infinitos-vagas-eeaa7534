import { useState } from "react";
import { MapPin, Building, Clock, DollarSign, Bookmark } from "lucide-react";
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

const JobCard = ({ job }: JobCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

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
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="text-muted-foreground font-medium">{job.company}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.posted}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {job.type}
            </Badge>
            <div className="flex items-center gap-1 text-success font-semibold">
              <DollarSign className="w-4 h-4" />
              {job.salary}
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.requirements.slice(0, 3).map((req, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {req}
              </Badge>
            ))}
            {job.requirements.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.requirements.length - 3} mais
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-3">
          <div className="flex items-center gap-2 w-full">
            <Button variant="outline" className="flex-1">
              Ver Detalhes
            </Button>
            <Button 
              variant="default" 
              className="flex-1"
              onClick={handleApplyClick}
              disabled={hasApplied}
            >
              {hasApplied ? "Já Candidatado" : "Candidatar-se"}
            </Button>
          </div>
        </CardFooter>
      </Card>

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
