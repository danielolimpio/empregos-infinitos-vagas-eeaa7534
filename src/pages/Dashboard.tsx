import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CandidateProfile from "@/components/dashboard/CandidateProfile";
import CandidateProfileForm from "@/components/dashboard/CandidateProfileForm";
import ApplicationsList from "@/components/dashboard/ApplicationsList";
import ChatPanel from "@/components/dashboard/ChatPanel";
import RecruiterCompanyCard from "@/components/dashboard/RecruiterCompanyCard";
import RecruiterProfileForm from "@/components/dashboard/RecruiterProfileForm";
import JobManager from "@/components/dashboard/JobManager";
import CandidatesTable from "@/components/dashboard/CandidatesTable";
import FilterBar from "@/components/dashboard/FilterBar";
import MetricsOverview from "@/components/dashboard/MetricsOverview";
import { RecruiterJobsList } from "@/components/dashboard/RecruiterJobsList";
import { CandidateApplicationsList } from "@/components/applications/CandidateApplicationsList";
import { RecruiterApplicationsList } from "@/components/applications/RecruiterApplicationsList";
import type { CandidateProfileData } from "@/components/dashboard/CandidateProfile";
import type { CompanyData } from "@/components/dashboard/RecruiterCompanyCard";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [candidateOpen, setCandidateOpen] = React.useState(false);
  const [recruiterOpen, setRecruiterOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [accountType, setAccountType] = React.useState<'candidate' | 'recruiter'>('candidate');

  const [candidateData, setCandidateData] = React.useState<CandidateProfileData>({
    fullName: "",
    city: "",
    country: "",
    profession: "",
    status: "Desempregado",
    bio: "",
    salaryExpectation: "",
    seniority: "",
    skills: [],
    experiences: [],
    portfolio: [],
  });

  const [recruiterData, setRecruiterData] = React.useState<CompanyData>({
    name: "",
    location: "",
    description: "",
    seals: [],
    email: "",
    phone: "",
  });

  // Carregar dados do perfil
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          navigate("/login");
          return;
        }

        const { data: profile, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        if (profile) {
          setAccountType(profile.account_type);

          if (profile.account_type !== "recruiter") {
            // Tratar qualquer valor nulo ou inválido como candidato
            setCandidateData({
              photoUrl: profile.avatar_url || "",
              fullName: profile.full_name || "",
              city: profile.city || "",
              country: profile.country || "",
              profession: profile.profession || "",
              status: (profile.status as "Desempregado" | "Empregado atualmente") || "Desempregado",
              bio: profile.bio || "",
              salaryExpectation: profile.salary_expectation || "",
              seniority: profile.seniority || "",
              skills: profile.skills || [],
              experiences: (profile.experiences as any) || [],
              portfolio: (profile.portfolio as any) || [],
            });
          } else {
            setRecruiterData({
              logoUrl: profile.avatar_url || "",
              name: profile.company_name || "",
              location: profile.location || "",
              description: profile.description || "",
              seals: profile.seals || [],
              email: profile.email || "",
              phone: profile.phone || "",
            });
          }
        }
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Erro ao carregar perfil. Tente novamente.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
    
    // Recarregar perfil quando dialog for fechado
    const reloadOnDialogClose = () => {
      if (!candidateOpen && !recruiterOpen) {
        loadProfile();
      }
    };
    
    reloadOnDialogClose();
  }, [navigate, toast, candidateOpen, recruiterOpen]);

  const handleCandidateSubmit = async (data: CandidateProfileData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const { error } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            account_type: "candidate",
            avatar_url: data.photoUrl,
            full_name: data.fullName,
            city: data.city,
            country: data.country,
            profession: data.profession,
            status: data.status,
            bio: data.bio,
            salary_expectation: data.salaryExpectation,
            seniority: data.seniority,
            skills: data.skills,
            experiences: data.experiences,
            portfolio: data.portfolio,
          },
          { onConflict: "id" }
        );


      if (error) throw error;

      setCandidateData(data);
      setCandidateOpen(false);
      toast({ 
        title: "Perfil atualizado com sucesso!",
        description: "Suas informações foram salvas.",
      });
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao salvar perfil. Tente novamente.",
      });
    }
  };

  const handleRecruiterSubmit = async (data: CompanyData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const { error } = await supabase
        .from("profiles")
        .upsert(
          {
            id: user.id,
            account_type: "recruiter",
            avatar_url: data.logoUrl,
            company_name: data.name,
            location: data.location,
            description: data.description,
            seals: data.seals,
            email: data.email,
            phone: data.phone,
          },
          { onConflict: "id" }
        );


      if (error) throw error;

      setRecruiterData(data);
      setRecruiterOpen(false);
      toast({ 
        title: "Perfil da empresa atualizado com sucesso!",
        description: "As informações foram salvas.",
      });
    } catch (error) {
      console.error("Erro ao salvar perfil:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao salvar perfil. Tente novamente.",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dashboard de Vagas | Vagas de Trabalhos"
        description="Área restrita para usuários cadastrados."
        canonical="https://vagasdetrabalhos.com/dashboard"
        isPrivatePage={true}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Dashboard de Vagas</h1>
          <p className="text-muted-foreground">Painel moderno para gerenciar sua carreira ou processos seletivos.</p>
        </header>

        <Tabs defaultValue="candidato" className="w-full">
          <TabsList>
            <TabsTrigger value="candidato">Candidato</TabsTrigger>
            <TabsTrigger value="recrutador">Recrutador</TabsTrigger>
          </TabsList>

          {/* Candidato */}
          <TabsContent value="candidato" className="mt-6">
            <section aria-label="Filtros de vagas" className="mb-6">
              <FilterBar />
            </section>

            <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Perfil</h2>
                  <Dialog open={candidateOpen} onOpenChange={setCandidateOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary">Editar perfil</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar perfil do candidato</DialogTitle>
                      </DialogHeader>
                      <CandidateProfileForm
                        defaultValues={candidateData}
                        onSubmit={handleCandidateSubmit}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <CandidateProfile data={candidateData} />
                <div>
                  <h2 className="mb-3 text-lg font-medium">Chat com recrutadores</h2>
                  <ChatPanel
                    messages={[
                      { id: "1", from: "recrutador", text: "Olá João, obrigado por aplicar!", time: "09:21" },
                      { id: "2", from: "candidato", text: "Olá! Fico à disposição para entrevista.", time: "09:23" },
                    ]}
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <CandidateApplicationsList />
              </div>
            </section>
          </TabsContent>

          {/* Recrutador */}
          <TabsContent value="recrutador" className="mt-6">
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Perfil da empresa</h2>
                  <Dialog open={recruiterOpen} onOpenChange={setRecruiterOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary">Editar perfil</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar perfil do recrutador</DialogTitle>
                      </DialogHeader>
                      <RecruiterProfileForm
                        defaultValues={recruiterData}
                        onSubmit={handleRecruiterSubmit}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <RecruiterCompanyCard data={recruiterData} />
                <MetricsOverview evaluatedPct={46} />
                <div>
                  <h2 className="mb-3 text-lg font-medium">Chat com candidatos</h2>
                  <ChatPanel
                    messages={[
                      { id: "m1", from: "candidato", text: "Enviei meu portfólio, obrigado!", time: "10:04" },
                      { id: "m2", from: "recrutador", text: "Recebido, vamos avaliar e retorno ainda hoje.", time: "10:06" },
                    ]}
                  />
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <RecruiterJobsList />
                <RecruiterApplicationsList />
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
