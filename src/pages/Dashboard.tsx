import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CandidateProfile from "@/components/dashboard/CandidateProfile";
import ApplicationsList from "@/components/dashboard/ApplicationsList";
import ChatPanel from "@/components/dashboard/ChatPanel";
import RecruiterCompanyCard from "@/components/dashboard/RecruiterCompanyCard";
import JobManager from "@/components/dashboard/JobManager";
import CandidatesTable from "@/components/dashboard/CandidatesTable";
import FilterBar from "@/components/dashboard/FilterBar";
import MetricsOverview from "@/components/dashboard/MetricsOverview";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dashboard de Vagas | Vagas de Trabalhos"
        description="Dashboard profissional para Candidato e Recrutador, com perfil, candidaturas, chat interno e gestão de vagas."
        canonical="https://vagasdetrabalhos.com/dashboard"
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
                <CandidateProfile
                  data={{
                    fullName: "João da Silva",
                    city: "São Paulo",
                    country: "Brasil",
                    profession: "Designer UI/UX",
                    status: "Empregado atualmente",
                    bio: "Designer com 6+ anos em produtos digitais. Foco em acessibilidade e métricas.",
                    salaryExpectation: "R$ 8.000 - 10.000",
                    seniority: "Sênior",
                    skills: ["Figma", "Design System", "UX Research", "Prototipagem"],
                    experiences: [
                      { role: "Senior Product Designer", company: "Acme", period: "2022 — atual" },
                      { role: "UI/UX Designer", company: "Startup XYZ", period: "2019 — 2022" },
                    ],
                    portfolio: [
                      { title: "Case: App de Delivery", url: "https://exemplo.com/case1" },
                      { title: "Dashboard Analytics", url: "https://exemplo.com/case2" },
                    ],
                  }}
                />

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
                <section>
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-lg font-medium">Minhas candidaturas</h2>
                    <Button variant="secondary">Ver histórico</Button>
                  </div>
                  <ApplicationsList
                    items={[
                      { id: "a1", title: "Product Designer", company: "Pickolab", location: "São Paulo", type: "Remota", jobStatus: "Aberta", appStatus: "Em análise", appliedAt: new Date(Date.now() - 86400000).toISOString(), applicants: 74, daysLeft: 3 },
                      { id: "a2", title: "UI Designer", company: "Studio ABC", location: "Rio de Janeiro", type: "Híbrida", jobStatus: "Aberta", appStatus: "Visualizada", appliedAt: new Date(Date.now() - 3600000 * 5).toISOString(), applicants: 32, daysLeft: 5 },
                      { id: "a3", title: "Front-end Designer", company: "Tech.io", location: "Remoto", type: "Remota", jobStatus: "Preenchida", appStatus: "Reprovada", appliedAt: new Date(Date.now() - 3600000 * 30).toISOString(), applicants: 120 },
                    ]}
                  />
                </section>
              </div>
            </section>
          </TabsContent>

          {/* Recrutador */}
          <TabsContent value="recrutador" className="mt-6">
            <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6">
                <RecruiterCompanyCard
                  data={{
                    name: "Agência TalentHub",
                    location: "Belo Horizonte, Brasil",
                    description: "Especialistas em recrutamento para tecnologia e produto.",
                    seals: ["Ótimo ambiente", "Empresa certificada"],
                    email: "contato@talenthub.com",
                    phone: "+55 31 99999-0000",
                  }}
                />
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
                <JobManager
                  jobs={[
                    { id: "j1", title: "Visual Designer", location: "São Paulo", type: "Presencial", status: "Aberta" },
                    { id: "j2", title: "Product Designer", location: "Remoto", type: "Remota", status: "Aberta" },
                    { id: "j3", title: "Senior Interaction Designer", location: "Curitiba", type: "Híbrida", status: "Preenchida" },
                  ]}
                />
                <CandidatesTable
                  items={[
                    { id: "c1", name: "Ana Lima", role: "Product Designer", experience: "5 anos", status: "Em processo" },
                    { id: "c2", name: "Bruno Souza", role: "UI Designer", experience: "3 anos", status: "Novo" },
                    { id: "c3", name: "Carla Nunes", role: "UX Researcher", experience: "4 anos", status: "Selecionado" },
                  ]}
                />
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
