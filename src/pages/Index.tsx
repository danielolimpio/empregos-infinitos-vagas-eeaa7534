import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobFilters from "@/components/JobFilters";
import JobList from "@/components/JobList";
import Footer from "@/components/Footer";
import type { JobFilters as JobFiltersType } from "@/pages/BuscarVagas";

const Index = () => {
  const [filters, setFilters] = useState<JobFiltersType>({
    searchQuery: "",
    jobTypes: [],
    locations: [],
    salaryRanges: [],
    companies: [],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          <aside className="hidden lg:block">
            <JobFilters filters={filters} setFilters={setFilters} />
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
