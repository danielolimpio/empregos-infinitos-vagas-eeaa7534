import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaDeUso from "./pages/PoliticaDeUso";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import BuscarVagas from "./pages/BuscarVagas";
import CriarPerfil from "./pages/CriarPerfil";
import DicasCarreira from "./pages/DicasCarreira";
import Salarios from "./pages/Salarios";
import Empresas from "./pages/Empresas";
import PublicarVaga from "./pages/PublicarVaga";
import BuscarCandidatos from "./pages/BuscarCandidatos";
import Planos from "./pages/Planos";
import Ferramentas from "./pages/Ferramentas";
import Suporte from "./pages/Suporte";
import VagaDetalhes from "./pages/VagaDetalhes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politica-de-uso" element={<PoliticaDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/buscar-vagas" element={<BuscarVagas />} />
          <Route path="/vaga/:id" element={<VagaDetalhes />} />
          <Route path="/criar-perfil" element={<CriarPerfil />} />
          <Route path="/dicas-carreira" element={<DicasCarreira />} />
          <Route path="/salarios" element={<Salarios />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/publicar-vaga" element={<PublicarVaga />} />
          <Route path="/buscar-candidatos" element={<BuscarCandidatos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/suporte" element={<Suporte />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
