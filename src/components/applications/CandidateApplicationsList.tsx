import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Clock, CheckCircle, XCircle, Calendar, Briefcase } from "lucide-react";

type Application = {
  id: string;
  status: string;
  cover_letter: string;
  created_at: string;
  job: {
    id: string;
    title: string;
    company_name: string;
    location: string;
    type: string;
  };
};

export const CandidateApplicationsList: React.FC = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();

    // Realtime subscription for new applications and updates
    const channel = supabase
      .channel("applications_changes")
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

      const { data, error } = await supabase
        .from("applications")
        .select(`
          id,
          status,
          cover_letter,
          created_at,
          job:jobs (
            id,
            title,
            company_name,
            location,
            type
          )
        `)
        .eq("candidate_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error("Erro ao carregar candidaturas:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar suas candidaturas.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, {
      label: string;
      variant: "secondary" | "default" | "destructive";
      icon: any;
      className?: string;
    }> = {
      pending: {
        label: "Pendente",
        variant: "secondary",
        icon: Clock,
      },
      reviewing: {
        label: "Em análise",
        variant: "default",
        icon: Clock,
      },
      interview: {
        label: "Entrevista",
        variant: "default",
        icon: Calendar,
      },
      accepted: {
        label: "Aceita",
        variant: "default",
        icon: CheckCircle,
        className: "bg-green-500",
      },
      rejected: {
        label: "Não selecionado",
        variant: "destructive",
        icon: XCircle,
      },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className={config.className}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

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

  if (applications.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Você ainda não se candidatou a nenhuma vaga.</p>
          <p className="text-sm text-muted-foreground">
            Explore as vagas disponíveis e candidate-se às que mais combinam com você!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Minhas Candidaturas ({applications.length})</h2>

      <div className="grid gap-4">
        {applications.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{app.job.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {app.job.company_name} • {app.job.location}
                  </p>
                </div>
                {getStatusBadge(app.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Candidatura enviada em {formatDate(app.created_at)}</span>
              </div>

              <div>
                <Badge variant="outline">{app.job.type}</Badge>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm font-medium mb-1">Carta de Apresentação:</p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {app.cover_letter}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
