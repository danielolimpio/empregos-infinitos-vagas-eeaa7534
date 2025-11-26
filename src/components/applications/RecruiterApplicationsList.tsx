import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Eye, User, Mail, Phone, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Application = {
  id: string;
  status: string;
  cover_letter: string;
  resume_url: string | null;
  candidate_notes: string | null;
  recruiter_notes: string | null;
  created_at: string;
  job: {
    id: string;
    title: string;
  };
  candidate: {
    full_name: string | null;
    email: string | null;
    phone: string | null;
    profession: string | null;
    city: string | null;
  };
};

export const RecruiterApplicationsList: React.FC = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [recruiterNotes, setRecruiterNotes] = useState("");

  useEffect(() => {
    loadApplications();

    // Realtime subscription
    const channel = supabase
      .channel("recruiter_applications")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "applications",
        },
        () => {
          loadApplications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadApplications = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Get all jobs from this recruiter
      const { data: recruiterJobs } = await supabase
        .from("jobs")
        .select("id")
        .eq("recruiter_id", user.id);

      if (!recruiterJobs || recruiterJobs.length === 0) {
        setApplications([]);
        setLoading(false);
        return;
      }

      const jobIds = recruiterJobs.map((j) => j.id);

      // Get all applications for these jobs with candidate profile info
      const { data, error } = await supabase
        .from("applications")
        .select(`
          id,
          status,
          cover_letter,
          resume_url,
          candidate_notes,
          recruiter_notes,
          created_at,
          job:jobs (
            id,
            title
          )
        `)
        .in("job_id", jobIds)
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Get candidate profiles separately
      const applicationsWithProfiles = await Promise.all(
        (data || []).map(async (app: any) => {
          const { data: profile } = await supabase
            .from("profiles")
            .select("full_name, email, phone, profession, city")
            .eq("id", app.candidate_id)
            .single();

          return {
            ...app,
            candidate: profile || {
              full_name: null,
              email: null,
              phone: null,
              profession: null,
              city: null,
            },
          };
        })
      );

      setApplications(applicationsWithProfiles);
    } catch (error) {
      console.error("Erro ao carregar candidaturas:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar as candidaturas.",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (appId: string, newStatus: string) => {
    try {
      const updates: any = { status: newStatus };
      if (recruiterNotes) {
        updates.recruiter_notes = recruiterNotes;
      }

      const { error } = await supabase
        .from("applications")
        .update(updates)
        .eq("id", appId);

      if (error) throw error;

      toast({
        title: "Status atualizado!",
        description: "O status da candidatura foi atualizado com sucesso.",
      });

      loadApplications();
      setIsDetailsOpen(false);
      setRecruiterNotes("");
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível atualizar o status. Tente novamente.",
      });
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: "Pendente",
      reviewing: "Em análise",
      interview: "Entrevista",
      accepted: "Aceita",
      rejected: "Não selecionado",
    };
    return labels[status] || status;
  };

  const renderApplicationCard = (app: Application) => (
    <Card key={app.id}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">
              {app.candidate.full_name || "Candidato"}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {app.candidate.profession || "Profissão não informada"} • {app.candidate.city || "Localização não informada"}
            </p>
            <p className="text-sm text-muted-foreground">
              Vaga: {app.job.title}
            </p>
          </div>
          <Badge>{getStatusLabel(app.status)}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {app.candidate.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {app.candidate.email}
            </div>
          )}
          {app.candidate.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {app.candidate.phone}
            </div>
          )}
        </div>

        <p className="text-sm line-clamp-2">{app.cover_letter}</p>

        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setSelectedApp(app);
            setRecruiterNotes(app.recruiter_notes || "");
            setIsDetailsOpen(true);
          }}
        >
          <Eye className="w-4 h-4 mr-1" />
          Ver detalhes
        </Button>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Carregando candidaturas...</p>
        </CardContent>
      </Card>
    );
  }

  const pendingApps = applications.filter((a) => a.status === "pending");
  const reviewingApps = applications.filter((a) => a.status === "reviewing");
  const interviewApps = applications.filter((a) => a.status === "interview");
  const acceptedApps = applications.filter((a) => a.status === "accepted");
  const rejectedApps = applications.filter((a) => a.status === "rejected");

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Candidaturas Recebidas ({applications.length})
      </h2>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="pending">Pendentes ({pendingApps.length})</TabsTrigger>
          <TabsTrigger value="reviewing">Análise ({reviewingApps.length})</TabsTrigger>
          <TabsTrigger value="interview">Entrevista ({interviewApps.length})</TabsTrigger>
          <TabsTrigger value="accepted">Aceitas ({acceptedApps.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejeitadas ({rejectedApps.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-4">
          {pendingApps.length === 0 ? (
            <Card><CardContent className="py-8 text-center text-muted-foreground">
              Nenhuma candidatura pendente.
            </CardContent></Card>
          ) : (
            pendingApps.map(renderApplicationCard)
          )}
        </TabsContent>

        <TabsContent value="reviewing" className="space-y-4 mt-4">
          {reviewingApps.length === 0 ? (
            <Card><CardContent className="py-8 text-center text-muted-foreground">
              Nenhuma candidatura em análise.
            </CardContent></Card>
          ) : (
            reviewingApps.map(renderApplicationCard)
          )}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4 mt-4">
          {interviewApps.length === 0 ? (
            <Card><CardContent className="py-8 text-center text-muted-foreground">
              Nenhuma entrevista agendada.
            </CardContent></Card>
          ) : (
            interviewApps.map(renderApplicationCard)
          )}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4 mt-4">
          {acceptedApps.length === 0 ? (
            <Card><CardContent className="py-8 text-center text-muted-foreground">
              Nenhuma candidatura aceita.
            </CardContent></Card>
          ) : (
            acceptedApps.map(renderApplicationCard)
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-4">
          {rejectedApps.length === 0 ? (
            <Card><CardContent className="py-8 text-center text-muted-foreground">
              Nenhuma candidatura rejeitada.
            </CardContent></Card>
          ) : (
            rejectedApps.map(renderApplicationCard)
          )}
        </TabsContent>
      </Tabs>

      {/* Dialog de detalhes */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Candidatura</DialogTitle>
          </DialogHeader>
          {selectedApp && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Candidato</h3>
                <div className="space-y-2">
                  <p><strong>Nome:</strong> {selectedApp.candidate.full_name || "Não informado"}</p>
                  <p><strong>Email:</strong> {selectedApp.candidate.email || "Não informado"}</p>
                  <p><strong>Telefone:</strong> {selectedApp.candidate.phone || "Não informado"}</p>
                  <p><strong>Profissão:</strong> {selectedApp.candidate.profession || "Não informada"}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Vaga</h3>
                <p>{selectedApp.job.title}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Carta de Apresentação</h3>
                <p className="text-sm whitespace-pre-wrap">{selectedApp.cover_letter}</p>
              </div>

              {selectedApp.resume_url && (
                <div>
                  <h3 className="font-semibold mb-2">Currículo</h3>
                  <a
                    href={selectedApp.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-4 h-4" />
                    Ver currículo
                  </a>
                </div>
              )}

              {selectedApp.candidate_notes && (
                <div>
                  <h3 className="font-semibold mb-2">Observações do Candidato</h3>
                  <p className="text-sm whitespace-pre-wrap">{selectedApp.candidate_notes}</p>
                </div>
              )}

              <div>
                <h3 className="font-semibold mb-2">Status da Candidatura</h3>
                <Select
                  value={selectedApp.status}
                  onValueChange={(value) =>
                    setSelectedApp({ ...selectedApp, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="reviewing">Em análise</SelectItem>
                    <SelectItem value="interview">Entrevista</SelectItem>
                    <SelectItem value="accepted">Aceita</SelectItem>
                    <SelectItem value="rejected">Não selecionado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Notas do Recrutador</h3>
                <Textarea
                  rows={4}
                  placeholder="Adicione notas sobre esta candidatura..."
                  value={recruiterNotes}
                  onChange={(e) => setRecruiterNotes(e.target.value)}
                />
              </div>

              <div className="flex gap-2 justify-end pt-4 border-t">
                <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
                  Fechar
                </Button>
                <Button
                  onClick={() => updateApplicationStatus(selectedApp.id, selectedApp.status)}
                >
                  Salvar Alterações
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
