import { Briefcase, Users, TrendingUp, FileText, UserCheck } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: any;
  author: string;
  publishedDate: string;
  updatedDate: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      tips?: string[];
    }[];
    conclusion: string;
  };
  keywords: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "carreira",
    name: "Carreira",
    description: "Desenvolvimento profissional, planos, transições e crescimento",
    icon: Briefcase,
  },
  {
    id: "entrevista",
    name: "Entrevista",
    description: "Preparação, follow-up, dicas, erros comuns e tipos de entrevista",
    icon: Users,
  },
  {
    id: "mercado",
    name: "Mercado",
    description: "Tendências, setores em alta, salários, demandas regionais e futuro do trabalho",
    icon: TrendingUp,
  },
  {
    id: "curriculo",
    name: "Currículo",
    description: "Modelos, formatação, palavras-chave, LinkedIn e portfólio",
    icon: FileText,
  },
  {
    id: "recrutamento",
    name: "Recrutamento",
    description: "Processos, ferramentas, atração de talentos e diversidade",
    icon: UserCheck,
  },
];

export const articles: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  return articles
    .filter(article => article.slug !== currentSlug)
    .filter(article => {
      const current = articles.find(a => a.slug === currentSlug);
      return current && article.category === current.category;
    })
    .slice(0, limit);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return articles.filter(article => article.category.toLowerCase() === categoryId);
}
