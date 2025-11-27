import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobFilters from "@/components/JobFilters";
import JobList from "@/components/JobList";
import Footer from "@/components/Footer";
import CurriculoCard from "@/components/CurriculoCard";
import SEO from "@/components/SEO";
import { LocationBanner } from "@/components/LocationBanner";
import { useGeolocation } from "@/hooks/useGeolocation";
import type { JobFilters as JobFiltersType } from "@/pages/BuscarVagas";

const Index = () => {
  const { location, loading, error } = useGeolocation();
  const [filters, setFilters] = useState<JobFiltersType>({
    searchQuery: "",
    jobTypes: [],
    locations: [],
    salaryRanges: [],
    companies: [],
  });
  const [showLocationDialog, setShowLocationDialog] = useState(false);

  // Auto-apply location filter when detected
  useEffect(() => {
    if (location && location.stateCode) {
      const stateCodeLower = location.stateCode.toLowerCase();
      // Only auto-apply if no location filters are already set
      if (filters.locations.length === 0) {
        setFilters(prev => ({
          ...prev,
          locations: [stateCodeLower]
        }));
      }
    }
  }, [location]);

  const handleChangeLocation = () => {
    // Scroll to filters section
    const filtersElement = document.querySelector('[data-location-filters]');
    if (filtersElement) {
      filtersElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestLocation = () => {
    // Reload page to re-trigger geolocation request
    window.location.reload();
  };

  // Dynamic SEO based on location
  const pageTitle = location 
    ? `Vagas de Emprego em ${location.city}, ${location.stateCode} | Empregos ${new Date().getFullYear()}`
    : "Vagas de Emprego | Encontre as Melhores Oportunidades";
  
  const pageDescription = location
    ? `Encontre as melhores vagas de emprego em ${location.city}, ${location.stateCode}. Centenas de oportunidades de trabalho próximas a você.`
    : "Encontre as melhores vagas de emprego no Brasil. Milhares de oportunidades de trabalho em diversas áreas e cidades.";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`https://vagasdetrabalhos.com/`}
        keywords={`vagas de emprego ${location ? `em ${location.city}` : ''}, trabalho ${location?.city || ''}, oportunidades de carreira, emprego Brasil`}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "VagasTrabalhos",
            "description": "Conectamos talentos com as melhores empresas do Brasil",
            "url": "https://vagasdetrabalhos.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vagasdetrabalhos.com/buscar-vagas?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VagasTrabalhos",
            "url": "https://vagasdetrabalhos.com",
            "logo": "https://vagasdetrabalhos.com/favicon.ico",
            "sameAs": [
              "https://twitter.com/vagasdetrabalhos"
            ]
          }
        ]}
      />
      <Header />
      <LocationBanner
        location={location}
        loading={loading}
        error={error}
        onChangeLocation={handleChangeLocation}
        onRequestLocation={handleRequestLocation}
      />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-80 space-y-6">
            <CurriculoCard />
            <div data-location-filters>
              <JobFilters filters={filters} setFilters={setFilters} />
            </div>
          </aside>
          <div className="flex-1">
            <JobList filters={filters} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
