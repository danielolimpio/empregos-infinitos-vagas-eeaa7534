import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Shield, 
  Globe, 
  Scale, 
  Users, 
  Ban, 
  FileCheck, 
  Copyright, 
  Settings, 
  AlertTriangle,
  Gavel,
  FileEdit,
  AlertCircle,
  UserX,
  Database,
  Mail,
  CheckCircle,
  Clock,
  Building,
  MessageSquare,
  Lock,
  BookOpen
} from "lucide-react";

const PoliticaDeUso = () => {
  const title = "Termos de Uso | VagasTrabalhos";
  const description = "Leia os termos e condições de uso do site VagasTrabalhos e saiba suas responsabilidades ao utilizar nossos serviços.";
  const canonical = "https://vagasdetrabalhos.com/politica-de-uso";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Termos de Uso',
    url: canonical,
    description,
    dateModified: '2025-12-17',
    publisher: {
      '@type': 'Organization',
      name: 'VagasTrabalhos',
      url: 'https://vagasdetrabalhos.com/'
    }
  };

  const tableOfContents = [
    { id: "servicos", title: "Nossos Serviços", icon: Globe },
    { id: "propriedade-intelectual", title: "Direitos de Propriedade Intelectual", icon: Copyright },
    { id: "representacoes", title: "Representações do Usuário", icon: Users },
    { id: "atividades-proibidas", title: "Atividades Proibidas", icon: Ban },
    { id: "contribuicoes", title: "Contribuições Geradas pelo Usuário", icon: FileCheck },
    { id: "licenca", title: "Contribuição/Licença", icon: FileText },
    { id: "gestao", title: "Gestão de Serviços", icon: Settings },
    { id: "vigencia", title: "Vigência e Rescisão", icon: Clock },
    { id: "modificacoes", title: "Modificações e Interrupções", icon: FileEdit },
    { id: "lei-aplicavel", title: "Lei Aplicável", icon: Scale },
    { id: "disputas", title: "Resolução de Controvérsias", icon: Gavel },
    { id: "correcoes", title: "Correções", icon: CheckCircle },
    { id: "isencao", title: "Isenção de Responsabilidade", icon: AlertCircle },
    { id: "limitacoes", title: "Limitações de Responsabilidade", icon: AlertTriangle },
    { id: "indenizacao", title: "Indenização", icon: Shield },
    { id: "dados", title: "Dados do Usuário", icon: Database },
    { id: "comunicacoes", title: "Comunicações Eletrônicas", icon: MessageSquare },
    { id: "diversos", title: "Diversos", icon: BookOpen },
    { id: "contato", title: "Contate-nos", icon: Mail }
  ];

  const keyPoints = [
    {
      icon: FileText,
      title: "Acordo Vinculante",
      description: "Ao acessar nossos serviços, você aceita estar vinculado a todos estes termos legais."
    },
    {
      icon: Shield,
      title: "Propriedade Intelectual",
      description: "Todo conteúdo e marcas são protegidos por leis de direitos autorais e marcas registradas."
    },
    {
      icon: Ban,
      title: "Uso Responsável",
      description: "Condutas proibidas incluem fraude, spam, coleta de dados não autorizada e atividades ilegais."
    },
    {
      icon: Scale,
      title: "Lei Brasileira",
      description: "Estes termos são regidos pelas leis do Brasil, com arbitragem em Brasília."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs 
            items={[
              { label: "Início", href: "/" },
              { label: "Termos de Uso" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Última atualização: 17 de dezembro de 2025
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leia atentamente estes termos antes de utilizar nossos serviços. Ao acessar a plataforma, você concorda com todas as condições aqui estabelecidas.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Acceptance Notice */}
        <Card className="max-w-5xl mx-auto mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Aceitação dos Nossos Termos Legais</h2>
                <p className="text-muted-foreground mb-4">
                  Nós somos <strong>Vagas de Trabalhos</strong> ("Empresa", "nós", "nosso"). Operamos, bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
                </p>
                <p className="text-muted-foreground mb-4">
                  Você pode entrar em contato conosco através do e-mail <a href="mailto:contato@vagasdetrabalhos.com" className="text-primary hover:underline">contato@vagasdetrabalhos.com</a> ou por correio para Vagas de Trabalhos, 1200 Av. Júlia Freire, Paraíba 58041-000, Brasil.
                </p>
                <p className="text-muted-foreground mb-4">
                  Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, seja pessoalmente ou em nome de uma entidade ("você"), e Vagas de Trabalhos. Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
                </p>
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-destructive font-medium text-sm">
                    ⚠️ CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Points Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">Pontos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-border/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Índice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {index + 1}. {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section 1 - Nossos Serviços */}
          <Card id="servicos" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 1</span>
                  <h2 className="text-2xl font-bold text-foreground">Nossos Serviços</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país. Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais, se e na medida em que estas forem aplicáveis.
              </p>
            </CardContent>
          </Card>

          {/* Section 2 - Propriedade Intelectual */}
          <Card id="propriedade-intelectual" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 2</span>
                  <h2 className="text-2xl font-bold text-foreground">Direitos de Propriedade Intelectual</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Nossa Propriedade Intelectual
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Nosso conteúdo e nossas marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Seu Uso de Nossos Serviços
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, concedemos a você uma licença não exclusiva, intransferível e revogável para:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Acessar os Serviços</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3">
                    Exclusivamente para seu uso pessoal, não comercial ou para fins comerciais internos.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    Suas Contribuições
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ao enviar qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços ("Submissões"), você concorda em nos ceder todos os direitos de propriedade intelectual relativos a ele. Você concorda que seremos proprietários deste conteúdo e teremos o direito de utilizá-lo e divulgá-lo irrestritamente para qualquer finalidade lícita.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Você é responsável pelo conteúdo que publica ou carrega e garante que qualquer Submissão é original para você ou que você possui os direitos necessários e licenças para submeter tais Submissões.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 - Representações do Usuário */}
          <Card id="representacoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 3</span>
                  <h2 className="text-2xl font-bold text-foreground">Representações do Usuário</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao usar os Serviços, você representa e garante que:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Você tem capacidade legal e concorda em cumprir com estes Termos Legais",
                  "Você não é menor de idade na jurisdição em que reside",
                  "Você não acessará os Serviços por meio de meios automatizados ou não humanos (bots, scripts, etc.)",
                  "Você não usará os Serviços para qualquer propósito ilegal ou não autorizado",
                  "O seu uso dos Serviços não violará qualquer lei ou regulamento aplicável"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Se você fornecer qualquer informação que seja incorreta, imprecisa, não atualizada ou incompleta, reservamo-nos o direito de suspender ou encerrar sua conta e recusar qualquer e toda utilização futura dos Serviços.
              </p>
            </CardContent>
          </Card>

          {/* Section 4 - Atividades Proibidas */}
          <Card id="atividades-proibidas" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <span className="text-sm font-medium text-destructive">Seção 4</span>
                  <h2 className="text-2xl font-bold text-foreground">Atividades Proibidas</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual os disponibilizamos. Como usuário dos Serviços, você concorda em não:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar coleções ou bancos de dados sem nossa autorização",
                  "Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente para obter informações confidenciais",
                  "Contornar, desativar ou interferir com os recursos de segurança dos Serviços",
                  "Desmerecer, difamar ou prejudicar a nós e/ou aos Serviços",
                  "Utilizar informações obtidas através dos Serviços para assediar, abusar ou prejudicar outra pessoa",
                  "Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso",
                  "Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis",
                  "Carregar ou transmitir vírus, cavalos de Troia ou outros materiais maliciosos",
                  "Usar sistemas automatizados (bots, scripts, robôs) sem autorização",
                  "Remover avisos de direitos autorais ou de propriedade de qualquer conteúdo",
                  "Tentar se passar por outro usuário ou pessoa",
                  "Interferir, interromper ou sobrecarregar os Serviços ou as redes conectadas",
                  "Assediar, incomodar, intimidar ou ameaçar nossos funcionários ou agentes",
                  "Contornar medidas destinadas a impedir ou restringir o acesso aos Serviços",
                  "Copiar ou adaptar o software dos Serviços (Flash, PHP, HTML, JavaScript, etc.)",
                  "Realizar engenharia reversa de qualquer software que faça parte dos Serviços",
                  "Usar os Serviços como parte de esforço para competir conosco",
                  "Coletar nomes de usuário e/ou e-mails por meios eletrônicos para envio de spam"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                    <Ban className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 5 - Contribuições */}
          <Card id="contribuicoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 5</span>
                  <h2 className="text-2xl font-bold text-foreground">Contribuições Geradas pelo Usuário</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Os serviços não oferecem aos usuários a opção de enviar ou publicar conteúdo. Podemos oferecer a você a oportunidade de criar, enviar, publicar, exibir, transmitir, executar, distribuir ou divulgar conteúdo e materiais para nós ou nos Serviços, incluindo, entre outros, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outros materiais (coletivamente, "Contribuições"). As contribuições podem ser visualizadas por outros usuários dos Serviços e por meio de sites de terceiros.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 - Licença */}
          <Card id="licenca" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 6</span>
                  <h2 className="text-2xl font-bold text-foreground">Contribuição/Licença</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer e suas escolhas (incluindo configurações).
                </p>
                <p>
                  Ao enviar sugestões ou outros comentários sobre os Serviços, você concorda que podemos usar e compartilhar esses comentários para qualquer finalidade, sem qualquer compensação para você.
                </p>
                <p>
                  Não reivindicamos qualquer direito de propriedade sobre suas Contribuições. Você mantém a propriedade integral de todas as suas Contribuições e de quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados a elas. Não nos responsabilizamos por quaisquer declarações ou representações contidas em suas Contribuições fornecidas por você em qualquer área dos Serviços.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 - Gestão de Serviços */}
          <Card id="gestao" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 7</span>
                  <h2 className="text-2xl font-bold text-foreground">Gestão de Serviços</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reservamo-nos o direito, mas não a obrigação, de:
              </p>
              <div className="space-y-3">
                {[
                  "Monitorar os Serviços em busca de violações destes Termos Legais",
                  "Tomar as medidas legais cabíveis contra qualquer pessoa que viole a lei ou estes Termos Legais",
                  "Recusar, restringir o acesso, limitar a disponibilidade ou desativar quaisquer de suas Contribuições",
                  "Remover dos Serviços ou desativar todos os arquivos e conteúdos que sejam excessivamente grandes ou que sobrecarreguem nossos sistemas",
                  "Gerenciar os Serviços de maneira a proteger nossos direitos e propriedade e facilitar o funcionamento adequado dos Serviços"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 8 - Vigência e Rescisão */}
          <Card id="vigencia" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 8</span>
                  <h2 className="text-2xl font-bold text-foreground">Vigência e Rescisão</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estes Termos Legais permanecerão em pleno vigor enquanto você utilizar os Serviços.
                </p>
                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <p className="text-amber-700 dark:text-amber-400 text-sm font-medium">
                    ⚠️ SEM PREJUÍZO DE QUALQUER OUTRA DISPOSIÇÃO DESTES TERMOS LEGAIS, RESERVAMO-NOS O DIREITO DE, A NOSSO CRITÉRIO EXCLUSIVO E SEM AVISO PRÉVIO OU RESPONSABILIDADE, NEGAR O ACESSO E O USO DOS SERVIÇOS A QUALQUER PESSOA, POR QUALQUER MOTIVO OU SEM MOTIVO ALGUM.
                  </p>
                </div>
                <p>
                  Caso sua conta seja encerrada ou suspensa por qualquer motivo, você fica proibido de se registrar e criar uma nova conta em seu nome, com um nome falso ou emprestado, ou em nome de terceiros. Além do encerramento ou suspensão da sua conta, reservamo-nos o direito de tomar as medidas legais cabíveis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 9 - Modificações e Interrupções */}
          <Card id="modificacoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileEdit className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 9</span>
                  <h2 className="text-2xl font-bold text-foreground">Modificações e Interrupções</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento e por qualquer motivo, a nosso exclusivo critério, sem aviso prévio. No entanto, não temos a obrigação de atualizar qualquer informação em nossos Serviços.
                </p>
                <p>
                  Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenções relacionadas aos Serviços, resultando em interrupções, atrasos ou erros.
                </p>
                <p>
                  Você concorda que não temos qualquer responsabilidade por quaisquer perdas, danos ou inconvenientes causados pela sua incapacidade de acessar ou usar os Serviços durante qualquer período de inatividade ou descontinuidade dos mesmos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 - Lei Aplicável */}
          <Card id="lei-aplicavel" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 10</span>
                  <h2 className="text-2xl font-bold text-foreground">Lei Aplicável</h2>
                </div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos Legais serão regidos e definidos de acordo com as leis do <strong>Brasil</strong> e você consente irrevogavelmente que os tribunais terão jurisdição exclusiva para resolver qualquer disputa que possa surgir em relação a estes Termos Legais.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 11 - Resolução de Controvérsias */}
          <Card id="disputas" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Gavel className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 11</span>
                  <h2 className="text-2xl font-bold text-foreground">Resolução de Controvérsias</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Negociações Informais</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Para agilizar a resolução e controlar os custos de qualquer disputa, as Partes concordam em primeiro tentar negociar informalmente qualquer Disputa por pelo menos <strong>30 dias</strong> antes do início da arbitragem. Essas negociações informais começam mediante notificação por escrito de uma Parte à outra.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Arbitragem Vinculativa</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Qualquer disputa decorrente ou relacionada a estes Termos Legais será submetida e finalmente resolvida pela International Commercial Arbitration Court sob a European Arbitration Chamber (Bélgica, Bruxelas, Avenue Louise, 146). O número de árbitros será de um. O local da arbitragem será <strong>Brasília</strong>. O idioma do procedimento será o <strong>português</strong>. A lei regente destes Termos Legais será a lei substantiva do <strong>Brasil</strong>.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Restrições</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As Partes concordam que qualquer arbitragem será limitada à disputa entre as Partes individualmente. Na medida máxima permitida pela lei: (a) nenhuma arbitragem será combinada com qualquer outro procedimento; (b) não há direito para qualquer Disputa ser arbitrada em base de ação de classe; e (c) não há direito para qualquer Disputa ser levada a julgamento em caráter representativo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 12 - Correções */}
          <Card id="correcoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 12</span>
                  <h2 className="text-2xl font-bold text-foreground">Correções</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e outras informações diversas. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
              </p>
            </CardContent>
          </Card>

          {/* Section 13 - Isenção de Responsabilidade */}
          <Card id="isencao" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-amber-600">Seção 13</span>
                  <h2 className="text-2xl font-bold text-foreground">Isenção de Responsabilidade</h2>
                </div>
              </div>
              <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 mb-4">
                <p className="text-amber-700 dark:text-amber-400 text-sm font-medium uppercase">
                  OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONÍVEIS". VOCÊ CONCORDA QUE O USO DOS SERVIÇOS SERÁ POR SUA CONTA E RISCO.
                </p>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Na máxima extensão permitida por lei, isentamos todas as garantias, expressas ou implícitas, relativas aos Serviços e ao seu uso, incluindo, sem limitação, as garantias implícitas de comerciabilidade, adequação a uma finalidade específica e não violação.
                </p>
                <p>
                  Não oferecemos garantias ou declarações sobre a precisão ou integridade do conteúdo dos Serviços ou do conteúdo de quaisquer sites ou aplicativos móveis vinculados aos Serviços.
                </p>
                <p>
                  Não garantimos, endossamos ou assumimos qualquer responsabilidade por qualquer produto ou serviço anunciado ou oferecido por terceiros através dos Serviços.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 14 - Limitações de Responsabilidade */}
          <Card id="limitacoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <span className="text-sm font-medium text-destructive">Seção 14</span>
                  <h2 className="text-2xl font-bold text-foreground">Limitações de Responsabilidade</h2>
                </div>
              </div>
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mb-4">
                <p className="text-destructive text-sm font-medium uppercase">
                  EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS OU AGENTES SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS.
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nossa responsabilidade perante você, por qualquer motivo e independentemente da forma da ação, estará sempre limitada ao menor valor entre o valor pago por você a nós, se houver. Certas leis estaduais dos EUA e leis internacionais não permitem limitações em garantias implícitas ou a exclusão ou limitação de certos danos. Se essas leis se aplicarem a você, algumas ou todas as isenções ou limitações acima podem não se aplicar a você.
              </p>
            </CardContent>
          </Card>

          {/* Section 15 - Indenização */}
          <Card id="indenizacao" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 15</span>
                  <h2 className="text-2xl font-bold text-foreground">Indenização</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em nos defender, indenizar e isentar de responsabilidade, incluindo nossas subsidiárias, afiliadas e todos os nossos respectivos diretores, agentes, parceiros e funcionários, de quaisquer perdas, danos, responsabilidades, reclamações ou demandas, resultantes de:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Uso dos Serviços",
                  "Violação destes Termos Legais",
                  "Violação de suas declarações e garantias",
                  "Violação dos direitos de terceiros, incluindo direitos de propriedade intelectual",
                  "Qualquer ato prejudicial contra qualquer outro usuário dos Serviços"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 16 - Dados do Usuário */}
          <Card id="dados" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 16</span>
                  <h2 className="text-2xl font-bold text-foreground">Dados do Usuário</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Conservaremos determinados dados que você transmitir aos Serviços com o objetivo de gerenciar o desempenho dos mesmos, bem como dados relacionados ao seu uso dos Serviços.
                </p>
                <p>
                  Embora realizemos backups de rotina regulares dos dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que você tenha realizado usando os Serviços.
                </p>
                <p>
                  Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de dados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 17 - Comunicações Eletrônicas */}
          <Card id="comunicacoes" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 17</span>
                  <h2 className="text-2xl font-bold text-foreground">Comunicações Eletrônicas, Transações e Assinaturas</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ao visitar os Serviços, enviar-nos e-mails e preencher formulários online, você concorda em receber comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os contratos, avisos, divulgações e outras comunicações que lhe fornecemos eletronicamente satisfazem qualquer exigência legal de que tal comunicação seja feita por escrito.
                </p>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm font-medium text-foreground">
                    VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS, BEM COMO A ENTREGA ELETRÔNICA DE AVISOS, POLÍTICAS E REGISTROS DE TRANSAÇÕES.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 18 - Diversos */}
          <Card id="diversos" className="scroll-mt-24 border-border/50">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 18</span>
                  <h2 className="text-2xl font-bold text-foreground">Diversos</h2>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou referentes aos Serviços constituem o acordo integral entre você e nós.
                </p>
                <p>
                  Nossa omissão em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos Legais não constituirá uma renúncia a tal direito ou disposição. Estes Termos Legais vigoram na máxima extensão permitida por lei.
                </p>
                <p>
                  Se qualquer disposição ou parte de uma disposição destes Termos Legais for considerada ilegal, nula ou inexequível, essa disposição será considerada separável destes Termos Legais e não afetará a validade e a aplicabilidade das demais disposições.
                </p>
                <p>
                  Não há qualquer relação de joint venture, parceria, emprego ou agência entre você e nós como resultado destes Termos Legais ou dos Serviços.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 19 - Contato */}
          <Card id="contato" className="scroll-mt-24 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Seção 19</span>
                  <h2 className="text-2xl font-bold text-foreground">Contate-nos</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Se você tiver alguma dúvida ou preocupação sobre estes Termos Legais, entre em contato conosco:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contato@vagasdetrabalhos.com" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  contato@vagasdetrabalhos.com
                </a>
                <a 
                  href="/suporte" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors font-medium"
                >
                  <MessageSquare className="w-5 h-5" />
                  Central de Suporte
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaDeUso;
