import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { JobForm } from "./JobForm";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, Clock, CheckCircle, XCircle, Edit, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

type Job = {
  id: string;
  company_name: string;
  title: string;
  location: string;
  salary: string | null;
  type: string;
  contract: string;
  description: string;
  requirements: string | null;
  benefits: string | null;
  status: "pending" | "approved" | "rejected";
  rejection_reason: string | null;
  created_at: string;
};

export const RecruiterJobsList: React.FC = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [deletingJobId, setDeletingJobId] = useState<string | null>(null);

  const loadJobs = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("recruiter_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Erro ao carregar vagas:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar suas vagas.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleCreateJob = async (data: any) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const { error } = await supabase.from("jobs").insert({
        recruiter_id: user.id,
        status: "pending",
        ...data,
      });

      if (error) throw error;

      toast({
        title: "Vaga publicada!",
        description: "Sua vaga foi enviada para análise. Aguarde aprovação do administrador.",
      });

      setIsDialogOpen(false);
      loadJobs();
    } catch (error) {
      console.error("Erro ao criar vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível publicar a vaga. Tente novamente.",
      });
    }
  };

  const handleUpdateJob = async (data: any) => {
    if (!editingJob) return;

    try {
      const { error } = await supabase
        .from("jobs")
        .update(data)
        .eq("id", editingJob.id);

      if (error) throw error;

      toast({
        title: "Vaga atualizada!",
        description: "As alterações foram salvas com sucesso.",
      });

      setEditingJob(null);
      setIsDialogOpen(false);
      loadJobs();
    } catch (error) {
      console.error("Erro ao atualizar vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível atualizar a vaga. Tente novamente.",
      });
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    try {
      const { error } = await supabase.from("jobs").delete().eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Vaga excluída",
        description: "A vaga foi removida com sucesso.",
      });

      setDeletingJobId(null);
      loadJobs();
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível excluir a vaga. Tente novamente.",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> Pendente
          </Badge>
        );
      case "approved":
        return (
          <Badge className="flex items-center gap-1 bg-green-500">
            <CheckCircle className="w-3 h-3" /> Aprovada
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <XCircle className="w-3 h-3" /> Rejeitada
          </Badge>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Carregando vagas...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Minhas Vagas</h2>
        <Button onClick={() => { setEditingJob(null); setIsDialogOpen(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          Nova Vaga
        </Button>
      </div>

      {jobs.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground mb-4">
              Você ainda não publicou nenhuma vaga.
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Publicar primeira vaga
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {job.company_name} • {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(job.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{job.type}</Badge>
                  <Badge variant="outline">{job.contract}</Badge>
                  {job.salary && <Badge variant="outline">{job.salary}</Badge>}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                {job.status === "rejected" && job.rejection_reason && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                    <p className="text-sm text-destructive font-medium">
                      Motivo da rejeição:
                    </p>
                    <p className="text-sm text-destructive/80 mt-1">
                      {job.rejection_reason}
                    </p>
                  </div>
                )}

                {job.status === "pending" && (
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingJob(job);
                        setIsDialogOpen(true);
                      }}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setDeletingJobId(job.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingJob ? "Editar Vaga" : "Publicar Nova Vaga"}
            </DialogTitle>
          </DialogHeader>
          <JobForm
            onSubmit={editingJob ? handleUpdateJob : handleCreateJob}
            onCancel={() => {
              setIsDialogOpen(false);
              setEditingJob(null);
            }}
            defaultValues={editingJob ? {
              company_name: editingJob.company_name,
              title: editingJob.title,
              location: editingJob.location,
              salary: editingJob.salary || "",
              type: editingJob.type as "Presencial" | "Remoto" | "Híbrido",
              contract: editingJob.contract as "CLT" | "PJ" | "Temporário" | "Estágio",
              description: editingJob.description,
              requirements: editingJob.requirements || "",
              benefits: editingJob.benefits || "",
            } : undefined}
            isEdit={!!editingJob}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deletingJobId} onOpenChange={() => setDeletingJobId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir esta vaga? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingJobId && handleDeleteJob(deletingJobId)}
              className="bg-destructive text-destructive-foreground"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
