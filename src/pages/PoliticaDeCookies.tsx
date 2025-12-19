import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Target, 
  Globe, 
  Clock, 
  Smartphone, 
  Code, 
  AlertTriangle, 
  RefreshCw, 
  Mail,
  Monitor,
  ChevronRight,
  Lock,
  BarChart3,
  Puzzle,
  Megaphone,
  Users,
  FileText,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaDeCookies = () => {
  const title = "Política de Cookies | VagasTrabalhos";
  const description = "Entenda o que são cookies, como os utilizamos e como você pode gerenciar suas preferências no VagasTrabalhos.";
  const canonical = "https://vagasdetrabalhos.com/politica-de-cookies";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Cookies',
    url: canonical,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'VagasTrabalhos',
      url: 'https://vagasdetrabalhos.com/'
    }
  };

  const keyPoints = [
    {
      icon: Cookie,
      title: "O que são Cookies",
      description: "Pequenos arquivos de dados armazenados no seu dispositivo"
    },
    {
      icon: Shield,
      title: "Sua Privacidade",
      description: "Você tem controle total sobre suas preferências"
    },
    {
      icon: Settings,
      title: "Gerenciamento",
      description: "Configure cookies através do seu navegador"
    },
    {
      icon: Target,
      title: "Publicidade",
      description: "Anúncios relevantes baseados em seus interesses"
    }
  ];

  const tableOfContents = [
    { id: "o-que-sao", title: "O que são cookies?" },
    { id: "por-que-usamos", title: "Por que usamos cookies?" },
    { id: "como-controlar", title: "Como posso controlar os cookies?" },
    { id: "navegador", title: "Como controlar cookies no navegador?" },
    { id: "outras-tecnologias", title: "Outras tecnologias de rastreamento" },
    { id: "flash-cookies", title: "Cookies Flash" },
    { id: "publicidade", title: "Publicidade direcionada" },
    { id: "atualizacoes", title: "Atualizações desta política" },
    { id: "contato", title: "Onde obter mais informações?" }
  ];

  const browsers = [
    { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Internet Explorer", url: "https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" },
    { name: "Firefox", url: "https://support.mozilla.org/pt-BR/kb/limpar-cookies-dados-armazenados-sites-firefox" },
    { name: "Safari", url: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
    { name: "Edge", url: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" }
  ];

  const adNetworks = [
    { name: "Aliança de Publicidade Digital", url: "https://www.aboutads.info/choices/" },
    { name: "Aliança de Publicidade Digital do Canadá", url: "https://youradchoices.ca/" },
    { name: "Aliança Europeia de Publicidade Digital Interativa", url: "https://www.youronlinechoices.eu/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-6 text-white/80">
              <Breadcrumbs 
                items={[
                  { label: "Início", href: "/" },
                  { label: "Política de Cookies" }
                ]}
              />
            </div>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Cookie className="h-8 w-8" />
                </div>
                <span className="text-amber-200 font-medium">Transparência e Controle</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Política de Cookies
              </h1>
              
              <p className="text-xl md:text-2xl text-amber-100 mb-4 max-w-3xl">
                Entenda como utilizamos cookies e tecnologias similares para melhorar sua experiência.
              </p>
              
              <div className="flex items-center gap-2 text-amber-200">
                <Clock className="h-5 w-5" />
                <span>Última atualização: 17 de dezembro de 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Card */}
        <section className="container mx-auto px-4 -mt-8 relative z-20 mb-12">
          <Card className="border-0 shadow-xl bg-card">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta Política de Cookies explica como <strong className="text-foreground">Vagas de Trabalhos</strong> ("Empresa", "nós", "nos" e "nossos") utiliza cookies e tecnologias semelhantes para reconhecê-lo quando você visita nosso site em{" "}
                <a href="https://vagasdetrabalhos.com" className="text-primary hover:underline">https://vagasdetrabalhos.com</a>. 
                Aqui explicamos o que são essas tecnologias, por que as usamos e seus direitos de controlar nosso uso delas.
              </p>
              <p className="text-muted-foreground mt-4">
                Em alguns casos, podemos usar cookies para coletar informações pessoais, ou essas informações podem se tornar pessoais se as combinarmos com outras informações.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Points Grid */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-4">
                    <point.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-amber-600" />
                      <h2 className="font-semibold text-lg">Índice</h2>
                    </div>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-amber-600 transition-colors py-1.5 group"
                        >
                          <ChevronRight className="h-4 w-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                          <span>{item.title}</span>
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Section 1 - O que são cookies */}
              <Card id="o-que-sao" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-xl flex-shrink-0">
                      <Cookie className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">O que são cookies?</h2>
                      <p className="text-muted-foreground">Entenda a tecnologia por trás dos cookies</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Os cookies são pequenos arquivos de dados que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para que seus sites funcionem ou funcionem de forma mais eficiente, além de fornecerem informações para relatórios.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-amber-600" />
                          Cookies Primários
                        </h4>
                        <p className="text-sm">
                          Cookies definidos pelo proprietário do site (neste caso, Vagas de Trabalhos). São essenciais para o funcionamento do site.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-orange-600" />
                          Cookies de Terceiros
                        </h4>
                        <p className="text-sm">
                          Cookies definidos por terceiros que não o proprietário do site. Permitem recursos como publicidade, conteúdo interativo e análises.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 - Por que usamos cookies */}
              <Card id="por-que-usamos" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <HelpCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Por que usamos cookies?</h2>
                      <p className="text-muted-foreground">Os motivos por trás do uso de cookies</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Usamos cookies primários e de terceiros por diversos motivos. Alguns cookies são necessários por razões técnicas para que nosso site funcione, e nos referimos a eles como cookies "essenciais" ou "estritamente necessários".
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-foreground">Cookies Essenciais</h4>
                        </div>
                        <p className="text-sm">Necessários para o funcionamento básico do site</p>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-foreground">Cookies de Análise</h4>
                        </div>
                        <p className="text-sm">Rastreiam e direcionam interesses dos usuários</p>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Puzzle className="h-5 w-5 text-purple-600" />
                          <h4 className="font-semibold text-foreground">Cookies de Funcionalidade</h4>
                        </div>
                        <p className="text-sm">Melhoram a experiência nas propriedades online</p>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Megaphone className="h-5 w-5 text-amber-600" />
                          <h4 className="font-semibold text-foreground">Cookies de Publicidade</h4>
                        </div>
                        <p className="text-sm">Utilizados por terceiros para publicidade e análise</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 - Como controlar cookies */}
              <Card id="como-controlar" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-xl flex-shrink-0">
                      <Settings className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Como posso controlar os cookies?</h2>
                      <p className="text-muted-foreground">Seus direitos e opções de controle</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer seus direitos relacionados a cookies definindo suas preferências no <strong className="text-foreground">Gerenciador de Consentimento de Cookies</strong>.
                    </p>
                    
                    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 mt-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Gerenciador de Consentimento
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Selecione quais categorias de cookies aceita ou rejeita</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Cookies essenciais não podem ser rejeitados pois são estritamente necessários</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Encontre o gerenciador no banner de notificação do site</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      Se você optar por rejeitar os cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do nosso site possa ser restrito. Você também pode configurar ou alterar os controles do seu navegador para aceitar ou recusar cookies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4 - Controle no navegador */}
              <Card id="navegador" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                      <Monitor className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Como controlar cookies no navegador?</h2>
                      <p className="text-muted-foreground">Configure suas preferências no navegador</p>
                    </div>
                  </div>

                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      Como os métodos para recusar cookies através das configurações do seu navegador variam de navegador para navegador, você deve consultar o menu de ajuda do seu navegador para obter mais informações.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Navegadores Populares:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {browsers.map((browser, index) => (
                          <a
                            key={index}
                            href={browser.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <Globe className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium text-foreground">{browser.name}</span>
                            <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-foreground mb-3">Redes de Publicidade - Opt-out:</h4>
                      <div className="space-y-2">
                        {adNetworks.map((network, index) => (
                          <a
                            key={index}
                            href={network.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300 hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {network.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 - Outras tecnologias */}
              <Card id="outras-tecnologias" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-cyan-100 rounded-xl flex-shrink-0">
                      <Eye className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Outras tecnologias de rastreamento</h2>
                      <p className="text-muted-foreground">Web beacons e tecnologias similares</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Os cookies não são a única forma de reconhecer ou rastrear visitantes de um site. Podemos usar outras tecnologias semelhantes de tempos em tempos, como <strong className="text-foreground">web beacons</strong> (às vezes chamados de "pixels de rastreamento" ou "gifs transparentes").
                    </p>
                    
                    <div className="p-5 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
                      <h4 className="font-semibold text-foreground mb-3">Web beacons permitem:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Monitorar padrões de tráfego de usuários entre páginas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Enviar ou interagir com cookies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Entender se você chegou via anúncio online</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Medir sucesso de campanhas de e-mail marketing</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm italic">
                      Em muitos casos, essas tecnologias dependem de cookies para funcionar corretamente, portanto, recusar cookies prejudica seu funcionamento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6 - Flash Cookies */}
              <Card id="flash-cookies" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-rose-100 rounded-xl flex-shrink-0">
                      <Code className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Cookies Flash</h2>
                      <p className="text-muted-foreground">Objetos Compartilhados Locais (LSOs)</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Os sites também podem usar os chamados "Flash Cookies" (também conhecidos como Objetos Compartilhados Locais ou "LSOs") para, entre outras coisas, coletar e armazenar informações sobre o seu uso de nossos serviços, prevenção de fraudes e para outras operações do site.
                    </p>
                    
                    <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-rose-600" />
                        Como gerenciar Flash Cookies:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-rose-600 mt-0.5 flex-shrink-0" />
                          <span>Ajuste as configurações do Flash Player no Painel de Configurações de Armazenamento do Site</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-rose-600 mt-0.5 flex-shrink-0" />
                          <span>Acesse o Painel de Configurações de Armazenamento Global</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-rose-600 mt-0.5 flex-shrink-0" />
                          <span>Exclua Flash Cookies existentes ou impeça novos</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">
                          <strong className="text-foreground">Atenção:</strong> Configurar o Flash Player para restringir cookies Flash pode reduzir ou impedir a funcionalidade de alguns aplicativos Flash.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 7 - Publicidade direcionada */}
              <Card id="publicidade" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-indigo-100 rounded-xl flex-shrink-0">
                      <Target className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Publicidade direcionada</h2>
                      <p className="text-muted-foreground">Como funciona a publicidade personalizada</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Terceiros podem instalar cookies no seu computador ou dispositivo móvel para exibir anúncios através do nosso site. Essas empresas podem usar informações sobre suas visitas a este e outros sites para fornecer anúncios relevantes sobre produtos e serviços que possam ser do seu interesse.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                        <h4 className="font-semibold text-foreground mb-2">O que é coletado:</h4>
                        <p className="text-sm">
                          Informações sobre visitas a sites para exibir anúncios relevantes. Usam cookies ou web beacons para esse fim.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-foreground mb-2">Sua privacidade:</h4>
                        <p className="text-sm">
                          As informações coletadas não permitem identificar nome, contato ou dados pessoais, a menos que você opte por fornecê-los.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 8 - Atualizações */}
              <Card id="atualizacoes" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-teal-100 rounded-xl flex-shrink-0">
                      <RefreshCw className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Atualizações desta política</h2>
                      <p className="text-muted-foreground">Mantenha-se informado sobre mudanças</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que utilizamos ou por outros motivos operacionais, legais ou regulamentares.
                    </p>
                    
                    <div className="p-5 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-teal-600" />
                        <div>
                          <p className="font-semibold text-foreground">Visite regularmente</p>
                          <p className="text-sm">A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 9 - Contato */}
              <Card id="contato" className="border-0 shadow-lg scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Onde obter mais informações?</h2>
                      <p className="text-muted-foreground">Entre em contato conosco</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Se você tiver alguma dúvida sobre o nosso uso de cookies ou outras tecnologias, entre em contato conosco:
                    </p>
                    
                    <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                      <h3 className="font-bold text-xl text-foreground mb-4">Vagas de Trabalhos</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">E-mail</p>
                            <a href="mailto:contato@vagasdetrabalhos.com" className="text-amber-600 hover:underline">
                              contato@vagasdetrabalhos.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Endereço</p>
                            <p>Av. Júlia Freire, 1200 - Expedicionários</p>
                            <p>João Pessoa - PB/Brasil 58.041-000</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Smartphone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Telefone</p>
                            <p>(11) 99736-1698</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6">
                      Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{" "}
                      <Link to="/politica-de-privacidade" className="text-primary hover:underline font-medium">
                        Política de Privacidade
                      </Link>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
