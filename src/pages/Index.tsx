import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobFilters from "@/components/JobFilters";
import JobList from "@/components/JobList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          <aside className="hidden lg:block">
            <JobFilters />
          </aside>
          <div className="flex-1">
            <JobList />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
