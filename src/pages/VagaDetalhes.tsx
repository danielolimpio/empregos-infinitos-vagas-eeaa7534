import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CurriculoCard from "@/components/CurriculoCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ApplicationForm } from "@/components/applications/ApplicationForm";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  Share2,
} from "lucide-react";

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
  created_at: string;
};

const VagaDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    loadJob();
    checkIfApplied();
  }, [id]);

  const loadJob = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .eq("status", "approved")
        .single();

      if (error) throw error;
      setJob(data);
    } catch (error) {
      console.error("Erro ao carregar vaga:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Vaga não encontrada.",
      });
      navigate("/buscar-vagas");
    } finally {
      setLoading(false);
    }
  };

  const checkIfApplied = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("applications")
        .select("id")
        .eq("job_id", id)
        .eq("candidate_id", user.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      setHasApplied(!!data);
    } catch (error) {
      console.error("Erro ao verificar candidatura:", error);
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

      if (hasApplied) {
        toast({
          title: "Você já se candidatou",
          description: "Você já enviou uma candidatura para esta vaga.",
        });
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
    if (!job) return;

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `Veja esta vaga: ${job?.title} na ${job?.company_name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link da vaga foi copiado para a área de transferência.",
      });
    }
  };

  const decodeHtml = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Publicada hoje";
    if (diffDays === 1) return "Publicada há 1 dia";
    if (diffDays < 7) return `Publicada há ${diffDays} dias`;
    if (diffDays < 30) return `Publicada há ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) > 1 ? "s" : ""}`;
    return `Publicada há ${Math.floor(diffDays / 30)} mês${Math.floor(diffDays / 30) > 1 ? "es" : ""}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${job.title} na ${job.company_name} | Vagas de Trabalhos`}
        description={job.description.substring(0, 160)}
        canonical={`https://vagasdetrabalhos.com/vaga/${job.id}`}
        keywords={`vaga ${job.title}, emprego ${job.location}, ${job.company_name}, vagas de trabalho`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": job.title,
          "description": job.description,
          "datePosted": job.created_at,
          "hiringOrganization": {
            "@type": "Organization",
            "name": job.company_name
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": job.location
            }
          },
          "employmentType": job.type.toUpperCase(),
          ...(job.salary && {
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "BRL",
              "value": {
                "@type": "QuantitativeValue",
                "value": job.salary,
                "unitText": "MONTH"
              }
            }
          })
        }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Breadcrumbs items={[
          { label: "Buscar Vagas", href: "/buscar-vagas" },
          { label: job.title }
        ]} />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb e botão voltar */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/buscar-vagas")}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para busca
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header da vaga */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                        <p className="text-xl text-muted-foreground">{job.company_name}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleShare}>
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{job.location}</span>
                    </div>
                    {job.salary && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        <span>{job.salary}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{formatDate(job.created_at)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Badge className="text-sm px-3 py-1">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {job.contract}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Descrição da vaga */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Sobre a vaga</h2>
                  <div 
                    className="prose prose-sm max-w-none text-muted-foreground [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4"
                    dangerouslySetInnerHTML={{ __html: decodeHtml(job.description) }}
                  />
                </CardContent>
              </Card>

              {/* Requisitos */}
              {job.requirements && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-4">Requisitos</h2>
                    <div 
                      className="prose prose-sm max-w-none text-muted-foreground [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4"
                      dangerouslySetInnerHTML={{ __html: decodeHtml(job.requirements || "") }}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Benefícios */}
              {job.benefits && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
                    <div 
                      className="prose prose-sm max-w-none text-muted-foreground [&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4"
                      dangerouslySetInnerHTML={{ __html: decodeHtml(job.benefits || "") }}
                    />
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar - Ação de candidatura */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Interessado nesta vaga?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Envie sua candidatura agora mesmo e aumente suas chances de conseguir esta oportunidade!
                    </p>

                    {hasApplied ? (
                      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-2">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Você já se candidatou!</span>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Sua candidatura está sendo analisada. Boa sorte!
                        </p>
                      </div>
                    ) : (
                      <Button
                        size="lg"
                        className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                        onClick={handleApplyClick}
                      >
                        Candidatar-se Agora
                      </Button>
                    )}

                    <div className="mt-6 pt-6 border-t space-y-3">
                      <h4 className="font-semibold mb-3">Informações importantes:</h4>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Processo seletivo 100% online
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Retorno em até 7 dias úteis
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          Sem custo de inscrição
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card com dicas */}
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">Dicas para sua candidatura</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personalize sua carta de apresentação</li>
                      <li>• Destaque experiências relevantes</li>
                      <li>• Seja claro e objetivo</li>
                      <li>• Revise antes de enviar</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Card de gerador de currículo */}
                <CurriculoCard />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

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

export default VagaDetalhes;
