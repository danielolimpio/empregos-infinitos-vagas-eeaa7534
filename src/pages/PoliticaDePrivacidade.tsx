import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Lock,
  UserCheck,
  Share2,
  Globe,
  Cookie,
  Users,
  Clock,
  FileText,
  AlertCircle,
  Mail,
  CheckCircle,
  Info,
  Database,
  Settings,
  Scale,
  HelpCircle
} from "lucide-react";

const PoliticaDePrivacidade = () => {
  const title = "Política de Privacidade | Vagas de Trabalhos";
  const description = "Saiba como coletamos, utilizamos e protegemos seus dados pessoais no site Vagas de Trabalhos.";
  const canonical = "https://vagasdetrabalhos.com/politica-de-privacidade";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Privacidade',
    url: canonical,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'Vagas de Trabalhos',
      url: 'https://vagasdetrabalhos.com/'
    }
  };

  const keyPoints = [
    {
      icon: Database,
      title: "Informações Coletadas",
      description: "Coletamos dados quando você visita, usa ou navega em nossos Serviços"
    },
    {
      icon: Lock,
      title: "Dados Sensíveis",
      description: "Não processamos informações pessoais sensíveis"
    },
    {
      icon: Share2,
      title: "Compartilhamento",
      description: "Compartilhamos em situações específicas e com terceiros autorizados"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Medidas técnicas e organizacionais para proteger seus dados"
    },
    {
      icon: UserCheck,
      title: "Seus Direitos",
      description: "Acesso, correção, exclusão e portabilidade dos seus dados"
    },
    {
      icon: Settings,
      title: "Controle",
      description: "Você pode exercer seus direitos a qualquer momento"
    }
  ];

  const tableOfContents = [
    "Que informações coletamos?",
    "Como processamos suas informações?",
    "Bases legais para processamento",
    "Quando compartilhamos informações?",
    "Sites de terceiros",
    "Cookies e tecnologias de rastreamento",
    "Logins em redes sociais",
    "Retenção de informações",
    "Segurança das informações",
    "Informações de menores",
    "Seus direitos de privacidade",
    "Controles Do-Not-Track",
    "Direitos nos Estados Unidos",
    "Outras regiões",
    "Atualizações deste aviso",
    "Contato",
    "Revisão e exclusão de dados"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Política de Privacidade" }
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-muted-foreground text-lg mb-2">Última atualização: 17 de dezembro de 2025</p>
        </section>

        {/* Introduction Card */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Este Aviso de Privacidade para <strong className="text-foreground">Vagas de Trabalhos</strong> ("nós", "nos" ou "nosso"), descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas informações pessoais quando você usa nossos serviços ("Serviços"), inclusive quando você:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Visita nosso site em <a href="https://vagasdetrabalhos.com" className="text-primary hover:underline">https://vagasdetrabalhos.com</a></li>
                  <li>Interage conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</li>
                </ul>
                <p>
                  <strong className="text-foreground">Tem dúvidas ou preocupações?</strong> A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos serviços.
                </p>
                <p>
                  Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço: <a href="mailto:conta@vagasdetrabalhos.com" className="text-primary hover:underline">conta@vagasdetrabalhos.com</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Points Grid */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Resumo dos Pontos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Table of Contents */}
        <Card className="mb-12 md:mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Índice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tableOfContents.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Section 1 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                1. Que Informações Coletamos?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Coletamos informações pessoais que você nos fornece.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Informações Pessoais Fornecidas por Você
                </h4>
                <p className="text-muted-foreground mb-4">
                  Coletamos informações pessoais que você nos fornece voluntariamente quando você se registra nos Serviços, ao participar de atividades nos Serviços ou ao entrar em contato conosco.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Nomes", "Números de telefone", "Endereços de e-mail", "Endereços postais", "Títulos de cargos", "Nomes de usuário", "Senhas", "Preferências de contato", "Dados de autenticação"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  Informação Sensível
                </h4>
                <p className="text-muted-foreground">
                  <strong>Não processamos informações sensíveis.</strong>
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  Informações Coletadas Automaticamente
                </h4>
                <p className="text-muted-foreground mb-4">
                  Coletamos automaticamente certas informações quando você visita, usa ou navega pelos Serviços. Essas informações não revelam sua identidade específica (como seu nome ou informações de contato), mas podem incluir informações sobre o dispositivo e o uso, como seu endereço IP, características do navegador e do dispositivo, sistema operacional, preferências de idioma, URLs de referência, nome do dispositivo, país, localização e outras informações técnicas.
                </p>
                <p className="text-sm text-muted-foreground">
                  Saiba mais em nosso <Link to="/politica-de-cookies" className="text-primary hover:underline">Aviso de Cookies</Link>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                2. Como Processamos Suas Informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Para facilitar a criação e autenticação de contas e para gerenciar contas de usuário.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Para salvaguardar ou proteger os interesses vitais de um indivíduo, como para prevenir danos.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                3. Bases Legais para Processamento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Só processamos as suas informações pessoais quando acreditamos ser necessário e temos uma razão legal válida para fazê-lo.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Consentimento</h4>
                  <p className="text-sm text-muted-foreground">Podemos processar suas informações se você nos tiver dado permissão para usar suas informações pessoais para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Obrigações Legais</h4>
                  <p className="text-sm text-muted-foreground">Podemos processar suas informações quando acreditamos ser necessário para cumprir nossas obrigações legais.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Interesses Vitais</h4>
                  <p className="text-sm text-muted-foreground">Podemos processar suas informações quando acreditamos ser necessário para proteger seus interesses vitais ou os de terceiros.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-primary" />
                </div>
                4. Quando Compartilhamos Informações?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Podemos compartilhar informações em situações específicas descritas nesta seção.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Transferências de Negócios</h4>
                <p className="text-muted-foreground">
                  Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte de nossa empresa por outra empresa.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                5. Sites de Terceiros
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Não nos responsabilizamos pela segurança de quaisquer informações que você compartilhe com terceiros.
                </p>
              </div>
              <p className="text-muted-foreground">
                Os Nossos Serviços podem conter links para sites, serviços online ou aplicativos móveis de terceiros. Não podemos garantir a segurança e a privacidade dos dados que você fornece a sites de terceiros. Recomendamos que você revise as políticas desses terceiros e os contate diretamente para esclarecer suas dúvidas.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                6. Cookies e Tecnologias de Rastreamento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
                </p>
              </div>
              <p className="text-muted-foreground mb-4">
                Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar informações quando você interage com nossos Serviços. Algumas tecnologias de rastreamento online nos ajudam a manter a segurança de nossos Serviços e sua conta.
              </p>
              <p className="text-sm text-muted-foreground">
                Informações específicas sobre como utilizamos essas tecnologias estão descritas em nosso <Link to="/politica-de-cookies" className="text-primary hover:underline">Aviso de Cookies</Link>.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                7. Logins em Redes Sociais
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Se você optar por se cadastrar usando uma conta de mídia social, poderemos ter acesso a certas informações sobre você.
                </p>
              </div>
              <p className="text-muted-foreground">
                Nossos Serviços oferecem a possibilidade de se cadastrar e fazer login usando os dados da sua conta de mídia social de terceiros (como seu login do Facebook ou X). As informações de perfil que receberemos podem variar dependendo do provedor, mas geralmente incluem seu nome, endereço de e-mail, lista de amigos e foto de perfil.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                8. Retenção de Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Mantemos suas informações pelo tempo necessário para completar as finalidades descritas neste Aviso.
                </p>
              </div>
              <p className="text-muted-foreground">
                Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos excluí-las ou anonimizá-las.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                9. Segurança das Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Nosso objetivo é proteger suas informações pessoais por meio de um sistema organizacional de medidas de segurança técnica.
                </p>
              </div>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas apropriadas e razoáveis, organizacionais, para proteger a segurança de todas as informações pessoais que processamos. No entanto, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura. Você deve acessar os Serviços somente em um ambiente seguro.
              </p>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                10. Informações de Menores
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Não coletamos dados intencionalmente de crianças menores de 18 anos.
                </p>
              </div>
              <p className="text-muted-foreground">
                Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, ou a idade equivalente conforme especificado por lei em sua jurisdição. Ao usar os Serviços, você declara ter pelo menos 18 anos de idade. Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, desativaremos a conta e tomaremos as medidas cabíveis para excluí-los de nossos registros.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Entre em contato: <a href="mailto:conta@vagasdetrabalhos.com" className="text-primary hover:underline">conta@vagasdetrabalhos.com</a>
              </p>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                11. Seus Direitos de Privacidade
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumindo:</strong> Você possui direitos que lhe permitem maior acesso e controle sobre suas informações pessoais.
                </p>
              </div>
              
              <div className="grid gap-3">
                {[
                  "Direito de saber se estamos ou não processando seus dados pessoais",
                  "Direito de acesso aos seus dados pessoais",
                  "Direito de retificar imprecisões nos seus dados pessoais",
                  "Direito de solicitar a eliminação dos seus dados pessoais",
                  "Direito de obter uma cópia dos dados pessoais que você compartilhou conosco",
                  "Direito de não discriminação pelo exercício dos seus direitos",
                  "Direito de optar por não permitir publicidade direcionada"
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{right}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Como exercer seus direitos</h4>
                <p className="text-muted-foreground mb-4">
                  Para exercer esses direitos, você pode entrar em contato conosco mediante o envio de uma solicitação de acesso do titular dos dados:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:conta@vagasdetrabalhos.com" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <Mail className="w-4 h-4" />
                    conta@vagasdetrabalhos.com
                  </a>
                  <Link to="/suporte" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors">
                    <HelpCircle className="w-4 h-4" />
                    Central de Suporte
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 12-14 Combined */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                12-14. Controles e Direitos Regionais
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Controle Global de Privacidade (GPC)</h4>
                <p className="text-muted-foreground">
                  Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um navegador ou extensão que oferece suporte ao GPC, trataremos isso como uma solicitação válida para optar por não permitir a venda ou o compartilhamento de suas informações pessoais para fins de publicidade direcionada.
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Direitos nos Estados Unidos</h4>
                <p className="text-muted-foreground">
                  Se você reside na Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virgínia, você pode ter direitos específicos de privacidade.
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Outras Regiões</h4>
                <p className="text-muted-foreground">
                  Coletamos e processamos suas informações pessoais de acordo com as obrigações e condições estabelecidas pelas leis de privacidade aplicáveis em sua região, incluindo Austrália, Nova Zelândia e África do Sul.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 15-17 Contact */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="border-b border-primary/10">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                15-17. Atualizações e Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Atualizamos Este Aviso?</h4>
                <p className="text-muted-foreground">
                  Sim, atualizaremos este aviso conforme necessário para cumprir as leis aplicáveis. A versão atualizada será indicada por uma nova data "Revisado" no topo deste Aviso de Privacidade.
                </p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Como Entrar em Contato</h4>
                <p className="text-muted-foreground mb-4">
                  Se você tiver dúvidas ou preocupações sobre este Aviso de Privacidade, entre em contato conosco:
                </p>
                <a href="mailto:conta@vagasdetrabalhos.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  <Mail className="w-5 h-5" />
                  conta@vagasdetrabalhos.com
                </a>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Revisar, Atualizar ou Excluir Dados</h4>
                <p className="text-muted-foreground">
                  Para revisar, atualizar ou excluir as informações que coletamos de você, entre em contato conosco em <a href="mailto:conta@vagasdetrabalhos.com" className="text-primary hover:underline">conta@vagasdetrabalhos.com</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;