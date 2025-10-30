import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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

  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={description} canonical={canonical} structuredData={structuredData} />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="prose max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Cookies</h1>
          <p className="text-muted-foreground mb-6">Última atualização: 22 de janeiro de 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. O que são Cookies?</h2>
            <p className="mb-3">
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, fornecer funcionalidades e recursos, além de fornecer informações aos proprietários do site.
            </p>
            <p className="mb-3">
              Os cookies permitem que o site reconheça seu dispositivo e armazene algumas informações sobre suas preferências ou ações anteriores, melhorando sua experiência de navegação e permitindo que o site ofereça recursos personalizados.
            </p>
            <p>
              Esta Política de Cookies complementa nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link> e explica como o Vagas de Trabalhos (vagasdetrabalhos.com) utiliza cookies e tecnologias similares.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Tipos de Cookies que Utilizamos</h2>
            <p className="mb-3">
              Utilizamos diferentes tipos de cookies em nosso site, cada um com finalidades específicas:
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.1 Cookies Estritamente Necessários (Essenciais)</h3>
            <p className="mb-3">
              Esses cookies são essenciais para o funcionamento do site e não podem ser desativados em nossos sistemas. Eles geralmente são definidos apenas em resposta a ações feitas por você que equivalem a uma solicitação de serviços, como:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Configurar suas preferências de privacidade</li>
              <li>Fazer login em sua conta</li>
              <li>Preencher formulários</li>
              <li>Manter a segurança e prevenir fraudes</li>
            </ul>
            <p className="mb-3">
              <strong>Exemplos:</strong> cookies de sessão, cookies de autenticação, cookies de segurança
            </p>
            <p>
              Sem esses cookies, serviços essenciais não podem ser fornecidos. Eles não armazenam informações pessoais identificáveis.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.2 Cookies de Desempenho e Análise</h3>
            <p className="mb-3">
              Esses cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Quais páginas são mais e menos populares</li>
              <li>Como os visitantes se movem pelo site</li>
              <li>Quantos usuários visitam o site e por quanto tempo</li>
              <li>Quais erros os usuários encontram</li>
            </ul>
            <p className="mb-3">
              <strong>Exemplos:</strong> Google Analytics, ferramentas de análise de tráfego
            </p>
            <p>
              Todas as informações coletadas por esses cookies são agregadas e, portanto, anônimas. Se você não permitir esses cookies, não saberemos quando você visitou nosso site e não poderemos monitorar seu desempenho.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.3 Cookies de Funcionalidade</h3>
            <p className="mb-3">
              Esses cookies permitem que o site forneça funcionalidades aprimoradas e personalização. Eles podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionamos às nossas páginas. Permitem:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Lembrar suas preferências (idioma, região, configurações de exibição)</li>
              <li>Personalizar conteúdo com base em seu comportamento</li>
              <li>Armazenar informações de formulários para facilitar preenchimentos futuros</li>
              <li>Fornecer recursos de mídia social e integração</li>
            </ul>
            <p className="mb-3">
              <strong>Exemplos:</strong> preferências de idioma, configurações de interface do usuário
            </p>
            <p>
              Se você não permitir esses cookies, alguns ou todos esses serviços podem não funcionar corretamente, e você pode ter uma experiência menos personalizada.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.4 Cookies de Publicidade e Marketing</h3>
            <p className="mb-3">
              Esses cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Eles podem ser usados por essas empresas para:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Construir um perfil de seus interesses</li>
              <li>Mostrar anúncios relevantes em outros sites</li>
              <li>Medir a eficácia de campanhas publicitárias</li>
              <li>Limitar o número de vezes que você vê um anúncio</li>
            </ul>
            <p className="mb-3">
              <strong>Exemplos:</strong> Google Ads, Facebook Pixel, cookies de remarketing
            </p>
            <p>
              Esses cookies não armazenam diretamente informações pessoais, mas são baseados na identificação exclusiva do seu navegador e dispositivo de internet. Se você não permitir esses cookies, você experimentará publicidade menos direcionada.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.5 Cookies de Terceiros</h3>
            <p className="mb-3">
              Também utilizamos cookies de terceiros de parceiros confiáveis para:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Análise de tráfego e comportamento (Google Analytics)</li>
              <li>Integração com redes sociais (Facebook, LinkedIn)</li>
              <li>Publicidade e remarketing</li>
              <li>Chat ao vivo e suporte ao cliente</li>
            </ul>
            <p>
              Esses terceiros têm suas próprias políticas de privacidade e cookies, sobre as quais não temos controle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Duração dos Cookies</h2>
            <p className="mb-3">
              Os cookies podem ser de sessão ou persistentes:
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">Cookies de Sessão</h3>
            <p className="mb-3">
              São cookies temporários que expiram quando você fecha o navegador. Eles permitem que o site vincule suas ações durante uma sessão de navegação específica.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">Cookies Persistentes</h3>
            <p>
              Permanecem no seu dispositivo por um período definido ou até que você os exclua. Eles ajudam o site a lembrar de você quando você retorna, permitindo funcionalidades como login automático e preferências salvas. A duração varia de alguns dias a vários anos, dependendo da finalidade do cookie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Como Gerenciar e Controlar Cookies</h2>
            <p className="mb-3">
              Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer suas preferências de cookies através das seguintes opções:
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.1 Configurações do Navegador</h3>
            <p className="mb-3">
              A maioria dos navegadores permite que você:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Visualize quais cookies estão armazenados</li>
              <li>Bloqueie todos ou alguns cookies</li>
              <li>Exclua cookies existentes</li>
              <li>Configure preferências para sites específicos</li>
            </ul>
            <p className="mb-3">
              Instruções para gerenciar cookies nos navegadores mais populares:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados do site</li>
              <li><strong>Mozilla Firefox:</strong> Opções → Privacidade e Segurança → Cookies e dados de sites</li>
              <li><strong>Safari:</strong> Preferências → Privacidade → Cookies e dados de sites</li>
              <li><strong>Microsoft Edge:</strong> Configurações → Cookies e permissões de site → Gerenciar e excluir cookies</li>
            </ul>
            <p>
              Observe que bloquear todos os cookies pode afetar a funcionalidade do site e sua experiência de usuário.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.2 Ferramentas de Opt-Out de Terceiros</h3>
            <p className="mb-3">
              Para cookies de publicidade comportamental, você pode usar ferramentas como:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Google Ads Settings: <span className="text-muted-foreground">adssettings.google.com</span></li>
              <li>Network Advertising Initiative: <span className="text-muted-foreground">optout.networkadvertising.org</span></li>
              <li>Digital Advertising Alliance: <span className="text-muted-foreground">optout.aboutads.info</span></li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.3 Modo de Navegação Privada</h3>
            <p>
              Você pode usar o modo de navegação privada ou anônima do seu navegador, que não salva cookies após o fechamento da sessão. No entanto, isso também pode limitar funcionalidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Cookies e Dispositivos Móveis</h2>
            <p className="mb-3">
              Se você acessa nossa plataforma através de dispositivos móveis, cookies podem ser armazenados de forma similar. Você pode gerenciar preferências de cookies nas configurações do navegador móvel ou do aplicativo.
            </p>
            <p>
              Dispositivos móveis também usam identificadores de publicidade (como IDFA da Apple ou AAID do Google), que funcionam de forma similar aos cookies. Você pode gerenciar esses identificadores nas configurações de privacidade do seu dispositivo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Outras Tecnologias Similares</h2>
            <p className="mb-3">
              Além de cookies, utilizamos outras tecnologias de rastreamento, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><strong>Web Beacons (Pixels):</strong> pequenas imagens gráficas incorporadas em páginas web ou e-mails para rastrear visualizações e interações</li>
              <li><strong>Local Storage:</strong> armazenamento no navegador para dados que persistem entre sessões</li>
              <li><strong>Session Storage:</strong> armazenamento temporário que é limpo quando a aba/janela é fechada</li>
              <li><strong>Impressões Digitais (Fingerprinting):</strong> coleta de informações sobre seu dispositivo e configurações para criar um identificador único</li>
            </ul>
            <p>
              Essas tecnologias são usadas para finalidades similares aos cookies e estão sujeitas aos mesmos controles de privacidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Impacto da Desativação de Cookies</h2>
            <p className="mb-3">
              A desativação de cookies pode afetar sua experiência no site das seguintes maneiras:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Você precisará fazer login toda vez que visitar o site</li>
              <li>Suas preferências e configurações não serão salvas</li>
              <li>Algumas funcionalidades podem não estar disponíveis</li>
              <li>O site pode não funcionar de forma otimizada</li>
              <li>Você pode ver anúncios menos relevantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Atualizações desta Política</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou para outros motivos operacionais, legais ou regulatórios. A data da última atualização está indicada no topo desta página. Recomendamos que você revise esta política regularmente para se manter informado sobre como usamos cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Conformidade com a LGPD</h2>
            <p>
              Nossa utilização de cookies está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Cookies que não são estritamente necessários são usados apenas com seu consentimento, que você pode retirar a qualquer momento através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contato</h2>
            <p className="mb-3">
              Se você tiver dúvidas ou preocupações sobre nossa utilização de cookies ou esta Política de Cookies, entre em contato conosco:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>E-mail:</strong> contato@vagasdetrabalhos.com</li>
              <li><strong>Site:</strong> vagasdetrabalhos.com</li>
              <li><strong>Assunto:</strong> "Política de Cookies"</li>
            </ul>
            <p className="mt-3">
              Para mais informações sobre como tratamos seus dados pessoais, consulte nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
