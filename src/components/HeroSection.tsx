import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/vagas_de_trabalho.jpg.asset.json";

const HeroSection = () => {
  const stats = [
    { label: "Empresas cadastradas", value: "5.000+" },
    { label: "Profissionais ativos", value: "50.000+" },
    { label: "Vagas em aberto", value: "15.000+" },
  ];

  const popularSearches = [
    "Desenvolvedor React",
    "Designer UX/UI",
    "Analista de Dados",
    "Gerente de Projetos",
    "Desenvolvedor Backend",
    "Marketing Digital",
  ];

  return (
    <section className="relative overflow-hidden bg-foreground text-background border-b border-foreground/20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground.url})` }}
        aria-hidden="true"
      />
      {/* Dark gradient mask for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground/95 via-foreground/85 to-foreground/75"
        aria-hidden="true"
      />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-background/40" />
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-background/70">
            Portal Nacional de Carreiras · Edição {new Date().getFullYear()}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left: Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.02] tracking-tight">
              A próxima etapa
              <br />
              da sua carreira
              <br />
              <span className="italic font-normal text-background/70">começa aqui.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-background/75 font-light">
              Conectamos profissionais qualificados às principais companhias do Brasil.
              Oportunidades verificadas, processos transparentes, resultados mensuráveis.
            </p>
          </div>

          {/* Right: Stats stack */}
          <aside className="lg:col-span-4 lg:border-l lg:border-background/20 lg:pl-10 space-y-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-background/15 pb-6 last:border-b-0 last:pb-0">
                <div className="font-serif text-5xl md:text-6xl font-medium tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-background/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Search bar */}
        <div className="mt-16 border-t border-background/20 pt-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-background/60 mb-4">
            Buscar Oportunidades
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-background/30 bg-background/[0.03]">
            <div className="relative md:col-span-6 border-b md:border-b-0 md:border-r border-background/20">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-background/50" strokeWidth={1.5} />
              <Input
                placeholder="Cargo, palavra-chave ou empresa"
                className="h-16 pl-11 rounded-none border-0 bg-transparent text-background placeholder:text-background/50 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="relative md:col-span-4 border-b md:border-b-0 md:border-r border-background/20">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-background/50" strokeWidth={1.5} />
              <Input
                placeholder="Cidade ou estado"
                className="h-16 pl-11 rounded-none border-0 bg-transparent text-background placeholder:text-background/50 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button className="md:col-span-2 h-16 rounded-none bg-background text-foreground hover:bg-background/90 font-semibold tracking-wide uppercase text-xs">
              Buscar <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.75} />
            </Button>
          </div>

          {/* Popular */}
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-background/60 mr-2">
              Buscas frequentes
            </span>
            {popularSearches.map((term) => (
              <button
                key={term}
                className="text-sm text-background/85 hover:text-background border border-background/30 hover:border-background px-4 py-2 transition-colors tracking-wide"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
