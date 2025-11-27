import { Target, Users, TrendingUp, Lightbulb } from "lucide-react";

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

export const articles: Article[] = [
  {
    slug: "como-criar-curriculo-que-atrai-recrutadores",
    title: "Como Criar um Currículo que Atrai Recrutadores",
    description: "Aprenda as melhores práticas para destacar suas experiências e habilidades no currículo e conquistar a atenção dos recrutadores.",
    category: "Currículo",
    readTime: "5 min",
    icon: Target,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-20",
    updatedDate: "2025-01-27",
    keywords: "currículo, CV, como fazer currículo, currículo profissional, dicas de currículo",
    image: "/og-image.jpg",
    content: {
      introduction: "Um currículo bem estruturado é sua primeira oportunidade de causar uma boa impressão. Neste guia, você aprenderá técnicas comprovadas para criar um currículo que se destaca entre centenas de candidatos.",
      sections: [
        {
          heading: "Estrutura Básica do Currículo",
          content: "Todo currículo profissional deve conter informações organizadas de forma clara e objetiva. A ordem correta das seções facilita a leitura e transmite profissionalismo.",
          tips: [
            "Dados pessoais e contato no topo",
            "Objetivo profissional claro e direto",
            "Experiências profissionais em ordem cronológica inversa",
            "Formação acadêmica e cursos relevantes",
            "Habilidades técnicas e comportamentais"
          ]
        },
        {
          heading: "Como Descrever Suas Experiências",
          content: "Use verbos de ação no início de cada descrição e quantifique seus resultados sempre que possível. Recrutadores valorizam conquistas mensuráveis.",
          tips: [
            "Comece frases com verbos fortes (desenvolvi, implementei, gerenciei)",
            "Inclua números e percentuais de resultados alcançados",
            "Foque em realizações, não apenas em responsabilidades",
            "Adapte o conteúdo para cada vaga pretendida"
          ]
        },
        {
          heading: "Erros Comuns a Evitar",
          content: "Pequenos erros podem eliminar suas chances. Revise cuidadosamente cada detalhe antes de enviar seu currículo.",
          tips: [
            "Erros de português e digitação",
            "Informações desatualizadas ou irrelevantes",
            "Foto inadequada ou de baixa qualidade",
            "Currículo muito extenso (ideal: 1-2 páginas)",
            "Design confuso ou cores excessivas"
          ]
        }
      ],
      conclusion: "Um currículo bem elaborado abre portas. Dedique tempo para personalizá-lo para cada oportunidade e mantenha-o sempre atualizado. Lembre-se: seu currículo é seu cartão de visitas profissional."
    }
  },
  {
    slug: "preparacao-para-entrevistas-de-emprego",
    title: "Preparação para Entrevistas de Emprego",
    description: "Dicas essenciais para se destacar nas entrevistas e conquistar a vaga dos seus sonhos com confiança e preparo.",
    category: "Entrevista",
    readTime: "7 min",
    icon: Users,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-18",
    updatedDate: "2025-01-27",
    keywords: "entrevista de emprego, como se preparar para entrevista, dicas de entrevista, perguntas de entrevista",
    image: "/og-image.jpg",
    content: {
      introduction: "A entrevista de emprego é o momento decisivo no processo seletivo. Com a preparação adequada, você pode transformar nervosismo em confiança e conquistar a vaga desejada.",
      sections: [
        {
          heading: "Pesquisa sobre a Empresa",
          content: "Antes da entrevista, investigue tudo sobre a empresa. Demonstrar conhecimento sobre a organização impressiona positivamente os recrutadores.",
          tips: [
            "Visite o site oficial e redes sociais da empresa",
            "Conheça produtos, serviços e valores da organização",
            "Pesquise notícias recentes sobre a empresa",
            "Entenda a cultura organizacional",
            "Saiba quem são os principais concorrentes"
          ]
        },
        {
          heading: "Perguntas Mais Frequentes",
          content: "Prepare respostas para as perguntas clássicas de entrevista. A prática te deixará mais natural e confiante.",
          tips: [
            "Fale sobre você (resumo profissional em 2 minutos)",
            "Por que quer trabalhar aqui?",
            "Quais são seus pontos fortes e fracos?",
            "Onde se vê daqui a 5 anos?",
            "Conte sobre um desafio que superou"
          ]
        },
        {
          heading: "Linguagem Corporal e Apresentação",
          content: "A comunicação não-verbal fala tanto quanto suas palavras. Transmita confiança através da sua postura e aparência.",
          tips: [
            "Vista-se adequadamente para a cultura da empresa",
            "Mantenha contato visual com o entrevistador",
            "Aperto de mão firme e sorriso sincero",
            "Postura ereta demonstra confiança",
            "Evite gestos nervosos ou distrações"
          ]
        },
        {
          heading: "Perguntas para Fazer ao Recrutador",
          content: "Fazer boas perguntas demonstra interesse genuíno e profissionalismo. Prepare de 2 a 3 perguntas inteligentes.",
          tips: [
            "Como é um dia típico nesta posição?",
            "Quais são os principais desafios da área?",
            "Como vocês medem o sucesso nesta função?",
            "Quais são as oportunidades de crescimento?",
            "Qual é o próximo passo no processo seletivo?"
          ]
        }
      ],
      conclusion: "A preparação é a chave para o sucesso em entrevistas. Pratique suas respostas, seja autêntico e demonstre entusiasmo pela oportunidade. Lembre-se: a entrevista é uma via de mão dupla - você também está avaliando se a empresa é ideal para você."
    }
  },
  {
    slug: "networking-como-construir-rede-profissional",
    title: "Networking: Como Construir uma Rede Profissional",
    description: "Estratégias práticas para ampliar sua rede de contatos e encontrar novas oportunidades de carreira através do networking.",
    category: "Networking",
    readTime: "6 min",
    icon: Users,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-15",
    updatedDate: "2025-01-27",
    keywords: "networking profissional, rede de contatos, como fazer networking, LinkedIn, conexões profissionais",
    image: "/og-image.jpg",
    content: {
      introduction: "Networking não é sobre coletar cartões de visita, mas sobre construir relacionamentos genuínos. Uma rede profissional forte pode abrir portas para oportunidades inesperadas.",
      sections: [
        {
          heading: "O que é Networking Efetivo",
          content: "Networking efetivo é baseado em reciprocidade e autenticidade. Não se trata apenas de pedir favores, mas de criar relações de valor mútuo.",
          tips: [
            "Foque em qualidade, não quantidade de conexões",
            "Ofereça ajuda antes de pedir",
            "Seja genuíno e autêntico nos relacionamentos",
            "Mantenha contato regular, não apenas quando precisar",
            "Agradeça e reconheça quem te ajuda"
          ]
        },
        {
          heading: "LinkedIn: Sua Vitrine Profissional",
          content: "O LinkedIn é a principal ferramenta de networking profissional. Um perfil otimizado aumenta significativamente suas chances de ser encontrado.",
          tips: [
            "Foto profissional e headline atraente",
            "Resumo que destaque sua proposta de valor",
            "Experiências detalhadas com resultados",
            "Publique conteúdo relevante regularmente",
            "Participe de grupos da sua área",
            "Envie mensagens personalizadas ao conectar"
          ]
        },
        {
          heading: "Eventos e Encontros Presenciais",
          content: "Eventos presenciais são oportunidades valiosas para conexões mais profundas. Prepare-se adequadamente antes de participar.",
          tips: [
            "Defina objetivos claros antes do evento",
            "Prepare um elevator pitch de 30 segundos",
            "Faça perguntas e ouça ativamente",
            "Troque contatos e faça follow-up em 48 horas",
            "Participe de comunidades da sua área"
          ]
        }
      ],
      conclusion: "Construir uma rede profissional sólida é um investimento de longo prazo. Seja consistente, autêntico e sempre busque agregar valor aos seus contatos. Lembre-se: networking é sobre pessoas, não apenas negócios."
    }
  },
  {
    slug: "negociacao-salarial-como-pedir-aumento",
    title: "Negociação Salarial: Como Pedir Aumento",
    description: "Técnicas comprovadas para negociar salário e benefícios de forma eficaz e profissional, obtendo o que você merece.",
    category: "Salário",
    readTime: "8 min",
    icon: TrendingUp,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-12",
    updatedDate: "2025-01-27",
    keywords: "negociação salarial, como pedir aumento, reajuste salarial, benefícios empresa, salário justo",
    image: "/og-image.jpg",
    content: {
      introduction: "Negociar salário é uma habilidade essencial que muitos profissionais negligenciam. Com a preparação e abordagem corretas, você pode aumentar significativamente sua remuneração.",
      sections: [
        {
          heading: "Quando Pedir Aumento",
          content: "O timing é crucial. Escolha o momento certo considerando o contexto da empresa e suas próprias conquistas.",
          tips: [
            "Após concluir um projeto importante com sucesso",
            "Durante avaliação de desempenho anual",
            "Quando assumir novas responsabilidades",
            "Após 12-18 meses sem reajuste",
            "Evite momentos de crise ou cortes na empresa"
          ]
        },
        {
          heading: "Preparação é Fundamental",
          content: "Não entre numa negociação sem dados concretos. Prepare seu case com antecedência e com argumentos sólidos.",
          tips: [
            "Pesquise salários de mercado para sua função",
            "Liste suas conquistas e resultados mensuráveis",
            "Documente projetos e responsabilidades extras",
            "Prepare propostas de valor futuro",
            "Defina um range salarial realista",
            "Antecipe objeções e prepare respostas"
          ]
        },
        {
          heading: "Como Conduzir a Conversa",
          content: "A forma como você apresenta seu pedido é tão importante quanto os argumentos. Seja profissional, confiante e respeitoso.",
          tips: [
            "Agende reunião privada com seu gestor",
            "Comece agradecendo as oportunidades",
            "Apresente suas realizações com dados",
            "Mostre alinhamento com objetivos da empresa",
            "Seja direto sobre o valor desejado",
            "Esteja aberto a negociar benefícios alternativos"
          ]
        },
        {
          heading: "Alternativas ao Aumento Salarial",
          content: "Se o aumento não for possível no momento, negocie outros benefícios que agreguem valor à sua compensação total.",
          tips: [
            "Bônus por desempenho ou metas",
            "Dias extras de férias ou home office",
            "Participação em lucros ou ações",
            "Plano de saúde melhor para família",
            "Investimento em cursos e certificações",
            "Horário flexível ou semana de 4 dias"
          ]
        }
      ],
      conclusion: "Negociar salário não é ser ganancioso, é reconhecer seu valor de mercado. Prepare-se adequadamente, seja profissional e confiante. Mesmo que não obtenha o aumento imediatamente, você terá plantado a semente e demonstrado iniciativa."
    }
  },
  {
    slug: "transicao-de-carreira-mudando-de-area",
    title: "Transição de Carreira: Mudando de Área",
    description: "Guia completo e prático para quem deseja mudar de área profissional com segurança, minimizando riscos.",
    category: "Carreira",
    readTime: "10 min",
    icon: Target,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-10",
    updatedDate: "2025-01-27",
    keywords: "transição de carreira, mudar de área, recolocação profissional, mudança de carreira, nova profissão",
    image: "/og-image.jpg",
    content: {
      introduction: "Mudar de carreira pode parecer assustador, mas com planejamento adequado e estratégia, é possível fazer uma transição bem-sucedida para uma nova área profissional.",
      sections: [
        {
          heading: "Reflexão e Autoconhecimento",
          content: "Antes de qualquer mudança, entenda profundamente suas motivações, valores e objetivos. Uma transição bem-sucedida começa com clareza interna.",
          tips: [
            "Identifique o que realmente te motiva",
            "Avalie suas habilidades transferíveis",
            "Faça testes de perfil profissional",
            "Converse com profissionais da área desejada",
            "Considere impactos financeiros e pessoais"
          ]
        },
        {
          heading: "Planejamento Financeiro",
          content: "Uma transição pode envolver redução temporária de renda. Prepare-se financeiramente para minimizar o estresse durante o processo.",
          tips: [
            "Construa reserva de emergência de 6-12 meses",
            "Quite dívidas antes da transição, se possível",
            "Considere trabalho freelance na transição",
            "Planeje custos com cursos e certificações",
            "Tenha plano B caso a transição não funcione"
          ]
        },
        {
          heading: "Adquirindo Novas Competências",
          content: "Investir em educação e prática é essencial. Demonstre comprometimento com a nova área através de ações concretas.",
          tips: [
            "Faça cursos online e certificações reconhecidas",
            "Participe de projetos voluntários ou freelas",
            "Construa portfólio mesmo sem experiência formal",
            "Entre em comunidades da nova área",
            "Considere mentoria com profissional experiente"
          ]
        },
        {
          heading: "Estratégia de Busca",
          content: "Adapte sua apresentação profissional para destacar habilidades transferíveis e demonstrar seu comprometimento com a mudança.",
          tips: [
            "Reescreva currículo focando em skills transferíveis",
            "Crie narrativa convincente sobre a transição",
            "Use LinkedIn para se posicionar na nova área",
            "Busque posições de entrada ou híbridas",
            "Network com pessoas da nova área"
          ]
        }
      ],
      conclusion: "Transição de carreira é uma jornada, não um salto. Seja paciente consigo mesmo, celebre pequenos progressos e mantenha-se focado em seus objetivos de longo prazo. Muitos profissionais bem-sucedidos mudaram de área - você também pode."
    }
  },
  {
    slug: "habilidades-do-futuro-o-que-desenvolver",
    title: "Habilidades do Futuro: O que Desenvolver",
    description: "As competências mais valorizadas pelo mercado de trabalho atual e futuro que você precisa desenvolver agora.",
    category: "Desenvolvimento",
    readTime: "6 min",
    icon: Lightbulb,
    author: "Equipe VagasTrabalhos",
    publishedDate: "2025-01-08",
    updatedDate: "2025-01-27",
    keywords: "habilidades do futuro, competências profissionais, soft skills, hard skills, mercado de trabalho",
    image: "/og-image.jpg",
    content: {
      introduction: "O mercado de trabalho está em constante transformação. Desenvolver as habilidades certas hoje garante sua relevância profissional no futuro.",
      sections: [
        {
          heading: "Soft Skills Essenciais",
          content: "Competências comportamentais são cada vez mais valorizadas. Máquinas podem automatizar tarefas, mas não substituem habilidades humanas.",
          tips: [
            "Inteligência emocional e empatia",
            "Comunicação clara e persuasiva",
            "Pensamento crítico e resolução de problemas",
            "Adaptabilidade e resiliência",
            "Colaboração e trabalho em equipe",
            "Criatividade e inovação"
          ]
        },
        {
          heading: "Competências Digitais",
          content: "Alfabetização digital não é mais opcional. Profissionais precisam dominar ferramentas tecnológicas independente da área.",
          tips: [
            "Análise de dados e interpretação de métricas",
            "Noções básicas de programação e automação",
            "Cibersegurança e proteção de dados",
            "Ferramentas de colaboração remota",
            "Marketing digital e presença online",
            "Inteligência Artificial e uso de ferramentas IA"
          ]
        },
        {
          heading: "Aprendizado Contínuo",
          content: "A habilidade mais importante é saber aprender constantemente. O conhecimento tem prazo de validade cada vez menor.",
          tips: [
            "Cultive mentalidade de crescimento",
            "Dedique tempo semanal para estudo",
            "Aprenda através de múltiplas fontes",
            "Pratique o que aprende imediatamente",
            "Ensine outros o que você sabe",
            "Busque feedback e mentoria"
          ]
        }
      ],
      conclusion: "Investir no desenvolvimento de habilidades é investir no seu futuro profissional. Comece hoje, seja consistente e mantenha-se curioso. O mercado sempre terá espaço para profissionais que nunca param de evoluir."
    }
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): Article[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  return articles
    .filter(article => 
      article.slug !== currentSlug && 
      article.category === currentArticle.category
    )
    .slice(0, limit);
};
