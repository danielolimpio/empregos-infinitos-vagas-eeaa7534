import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
          <p className="text-muted-foreground mb-6">Última atualização: 09/08/2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos armazenados no seu dispositivo que ajudam a reconhecer suas preferências e melhorar sua experiência.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Tipos de Cookies que Utilizamos</h2>
            <ul className="list-disc pl-5">
              <li>Essenciais: necessários para o funcionamento do site;</li>
              <li>Desempenho: ajudam a entender como você utiliza o site;</li>
              <li>Funcionais: lembram suas preferências;</li>
              <li>Publicidade: usados para exibir anúncios relevantes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Como Gerenciar Cookies</h2>
            <p>
              Você pode gerenciar cookies nas configurações do seu navegador. Lembre-se que a desativação de alguns cookies pode afetar funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Contato</h2>
            <p>
              Dúvidas sobre esta política? Escreva para: privacidade@vagasdetrabalhos.com
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
