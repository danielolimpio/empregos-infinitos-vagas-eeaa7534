import { FileText, ArrowUpRight } from "lucide-react";

const CurriculoCard = () => {
  return (
    <aside className="card-editorial bg-foreground text-background p-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-4 h-4" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold tracking-[0.24em] uppercase">
          Recurso Profissional
        </span>
      </div>

      <h3 className="font-serif text-2xl leading-tight mb-3">
        Construa seu currículo executivo
      </h3>

      <p className="text-sm leading-relaxed text-background/75 mb-6">
        Modelos editoriais, revisão automatizada e exportação em PDF de alta qualidade —
        pensados para processos seletivos exigentes.
      </p>

      <a
        href="https://fazercurriculo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-between w-full h-12 px-4 border border-background bg-transparent hover:bg-background hover:text-foreground transition-colors uppercase text-xs tracking-[0.18em] font-semibold"
      >
        <span>Criar Currículo Grátis</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
      </a>
    </aside>
  );
};

export default CurriculoCard;
