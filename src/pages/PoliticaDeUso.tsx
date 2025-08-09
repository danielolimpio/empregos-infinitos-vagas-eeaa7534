import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PoliticaDeUso = () => {
  const title = "Política de Uso | VagasTrabalhos";
  const description = "Leia os termos e condições de uso do site VagasTrabalhos e saiba suas responsabilidades ao utilizar nossos serviços.";
  const canonical = "https://vagasdetrabalhos.com/politica-de-uso";

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Uso',
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
        <article className="prose max-w-3xl mx-auto prose-headings:scroll-mt-24">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Uso</h1>
          <p className="text-muted-foreground mb-6">Última atualização: 09/08/2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site VagasTrabalhos, você concorda com estes Termos de Uso e com todas as leis e regulamentações aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Uso Permitido</h2>
            <p>
              Você se compromete a utilizar o site apenas para fins legais, como buscar oportunidades, candidatar-se a vagas e publicar vagas de emprego, respeitando a legislação vigente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Conteúdo do Usuário</h2>
            <p>
              Todo conteúdo enviado (currículos, descrições de vagas, comentários) é de responsabilidade do usuário. Reservamo-nos o direito de remover conteúdos que violem estes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Limitação de Responsabilidade</h2>
            <p>
              O VagasTrabalhos não se responsabiliza por ofertas, contratações ou negociações realizadas entre candidatos e empresas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Uso, entre em contato: contato@vagasdetrabalhos.com
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDeUso;
