import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PoliticaDePrivacidade = () => {
  const title = "Política de Privacidade | VagasTrabalhos";
  const description = "Saiba como coletamos, utilizamos e protegemos seus dados pessoais no site VagasTrabalhos.";
  const canonical = "https://vagasdetrabalhos.com/politica-de-privacidade";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Privacidade',
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-6">Última atualização: 09/08/2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Informações que Coletamos</h2>
            <p>
              Coletamos dados fornecidos por você (nome, e-mail, currículo) e dados de navegação (cookies, IP, dispositivo) para melhorar sua experiência e oferecer nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Como Utilizamos seus Dados</h2>
            <p>
              Utilizamos seus dados para criação de conta, candidaturas, comunicação, personalização de conteúdo e segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Compartilhamento</h2>
            <p>
              Seus dados podem ser compartilhados com empresas anunciantes quando você se candidata ou quando autoriza explicitamente, e com provedores de serviço para suporte operacional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Seus Direitos</h2>
            <p>
              Você pode acessar, corrigir, excluir e portar seus dados, além de revogar consentimentos. Para exercer seus direitos, contate: privacidade@vagasdetrabalhos.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Segurança e Retenção</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados e os retemos pelo tempo necessário para cumprir as finalidades desta política.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
