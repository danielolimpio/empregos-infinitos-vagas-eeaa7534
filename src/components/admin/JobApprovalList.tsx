import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  recruiter_id: string;
};

export const JobApprovalList: React.FC = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);

  const loadJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Erro ao carregar vagas:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar as vagas.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleApprove = async (jobId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const { error } = await supabase
        .from("jobs")
        .update({
          status: "approved",
          approved_by: user.id,
          approved_at: new Date().toISOString(),
          rejection_reason: null,
        })
        .eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Vaga aprovada!",
        description: "A vaga agora está visível no site.",
      });

      loadJobs();
    } catch (error) {
      console.error("Erro ao aprovar vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível aprovar a vaga. Tente novamente.",
      });
    }
  };

  const handleReject = async () => {
    if (!selectedJob || !rejectionReason.trim()) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, informe o motivo da rejeição.",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("jobs")
        .update({
          status: "rejected",
          rejection_reason: rejectionReason,
        })
        .eq("id", selectedJob.id);

      if (error) throw error;

      toast({
        title: "Vaga rejeitada",
        description: "O recrutador foi notificado sobre a rejeição.",
      });

      setIsRejectDialogOpen(false);
      setSelectedJob(null);
      setRejectionReason("");
      loadJobs();
    } catch (error) {
      console.error("Erro ao rejeitar vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível rejeitar a vaga. Tente novamente.",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Pendente</Badge>;
      case "approved":
        return <Badge className="bg-green-500">Aprovada</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejeitada</Badge>;
      default:
        return null;
    }
  };

  const renderJobCard = (job: Job, showActions: boolean = false) => (
    <Card key={job.id}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {job.company_name} • {job.location}
            </p>
          </div>
          {getStatusBadge(job.status)}
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

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setSelectedJob(job);
              setIsDetailsDialogOpen(true);
            }}
          >
            <Eye className="w-4 h-4 mr-1" />
            Ver detalhes
          </Button>

          {showActions && (
            <>
              <Button
                size="sm"
                onClick={() => handleApprove(job.id)}
                className="bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Aprovar
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  setSelectedJob(job);
                  setIsRejectDialogOpen(true);
                }}
              >
                <XCircle className="w-4 h-4 mr-1" />
                Rejeitar
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

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

  const pendingJobs = jobs.filter((j) => j.status === "pending");
  const approvedJobs = jobs.filter((j) => j.status === "approved");
  const rejectedJobs = jobs.filter((j) => j.status === "rejected");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Gerenciamento de Vagas</h2>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pendentes ({pendingJobs.length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Aprovadas ({approvedJobs.length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejeitadas ({rejectedJobs.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-4">
          {pendingJobs.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  Não há vagas pendentes de aprovação.
                </p>
              </CardContent>
            </Card>
          ) : (
            pendingJobs.map((job) => renderJobCard(job, true))
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-4">
          {approvedJobs.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  Não há vagas aprovadas ainda.
                </p>
              </CardContent>
            </Card>
          ) : (
            approvedJobs.map((job) => renderJobCard(job))
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-4">
          {rejectedJobs.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  Não há vagas rejeitadas.
                </p>
              </CardContent>
            </Card>
          ) : (
            rejectedJobs.map((job) => renderJobCard(job))
          )}
        </TabsContent>
      </Tabs>

      {/* Dialog de rejeição */}
      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rejeitar Vaga</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Por favor, informe o motivo da rejeição desta vaga. O recrutador
              receberá esta mensagem.
            </p>
            <Textarea
              placeholder="Ex: A descrição da vaga não está clara o suficiente..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              rows={4}
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsRejectDialogOpen(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={handleReject}>
                Confirmar Rejeição
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog de detalhes */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedJob?.title}</DialogTitle>
          </DialogHeader>
          {selectedJob && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Empresa</h4>
                <p className="text-muted-foreground">{selectedJob.company_name}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Localização</h4>
                <p className="text-muted-foreground">{selectedJob.location}</p>
              </div>
              <div className="flex gap-2">
                <Badge>{selectedJob.type}</Badge>
                <Badge>{selectedJob.contract}</Badge>
                {selectedJob.salary && <Badge>{selectedJob.salary}</Badge>}
              </div>
              <div>
                <h4 className="font-medium mb-2">Descrição</h4>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {selectedJob.description}
                </p>
              </div>
              {selectedJob.requirements && (
                <div>
                  <h4 className="font-medium mb-2">Requisitos</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {selectedJob.requirements}
                  </p>
                </div>
              )}
              {selectedJob.benefits && (
                <div>
                  <h4 className="font-medium mb-2">Benefícios</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {selectedJob.benefits}
                  </p>
                </div>
              )}
              {selectedJob.rejection_reason && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                  <h4 className="font-medium text-destructive mb-2">
                    Motivo da Rejeição
                  </h4>
                  <p className="text-sm text-destructive/80">
                    {selectedJob.rejection_reason}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
