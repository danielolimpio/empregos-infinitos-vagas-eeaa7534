import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Termos de Uso</h1>
          <p className="text-muted-foreground mb-6">Última atualização: 22 de janeiro de 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Aceitação dos Termos</h2>
            <p className="mb-3">
              Bem-vindo ao Vagas de Trabalhos (vagasdetrabalhos.com). Ao acessar, navegar ou utilizar qualquer funcionalidade deste site, você concorda expressamente com estes Termos de Uso, nossa Política de Privacidade e Política de Cookies. Se você não concorda com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
            <p>
              Estes termos constituem um acordo legal vinculante entre você (usuário) e o Vagas de Trabalhos. Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo sua responsabilidade revisar periodicamente esta página para verificar eventuais atualizações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Descrição dos Serviços</h2>
            <p className="mb-3">
              O Vagas de Trabalhos é uma plataforma digital que conecta candidatos a oportunidades de emprego e empresas a potenciais talentos. Nossos serviços incluem:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Publicação e busca de vagas de emprego em todo o Brasil</li>
              <li>Criação e gerenciamento de perfis profissionais para candidatos</li>
              <li>Ferramentas de recrutamento e seleção para empresas</li>
              <li>Recursos de pesquisa salarial e informações sobre empresas</li>
              <li>Conteúdo educacional sobre carreira e desenvolvimento profissional</li>
              <li>Sistemas de candidatura online e gestão de aplicações</li>
            </ul>
            <p>
              O Vagas de Trabalhos atua exclusivamente como intermediário, facilitando a conexão entre candidatos e empresas, sem participar diretamente dos processos de contratação ou estabelecer relações trabalhistas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Cadastro e Conta de Usuário</h2>
            <p className="mb-3">
              Para utilizar determinadas funcionalidades da plataforma, você precisará criar uma conta fornecendo informações precisas, completas e atualizadas. Você é responsável por:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Manter a confidencialidade de sua senha e credenciais de acesso</li>
              <li>Todas as atividades realizadas sob sua conta</li>
              <li>Notificar imediatamente o Vagas de Trabalhos sobre qualquer uso não autorizado de sua conta</li>
              <li>Garantir que todas as informações fornecidas sejam verdadeiras e legítimas</li>
            </ul>
            <p>
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos ou que contenham informações falsas, enganosas ou fraudulentas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Uso Permitido e Condutas Proibidas</h2>
            <p className="mb-3">
              Você concorda em utilizar a plataforma Vagas de Trabalhos apenas para fins legítimos e de acordo com estes termos. São expressamente proibidas as seguintes condutas:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Publicar vagas falsas, enganosas ou que não existam de fato</li>
              <li>Incluir informações falsas, imprecisas ou fraudulentas em currículos ou perfis</li>
              <li>Utilizar a plataforma para qualquer atividade ilegal ou não autorizada</li>
              <li>Coletar ou armazenar dados pessoais de outros usuários sem autorização</li>
              <li>Enviar spam, correntes, esquemas de pirâmide ou conteúdo não solicitado</li>
              <li>Reproduzir, duplicar, copiar, vender ou explorar qualquer parte do serviço sem autorização</li>
              <li>Utilizar sistemas automatizados (bots, scripts) para acessar o site</li>
              <li>Tentar comprometer a segurança ou integridade da plataforma</li>
              <li>Discriminar candidatos com base em características protegidas por lei</li>
              <li>Publicar conteúdo ofensivo, difamatório, obsceno ou que viole direitos de terceiros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Conteúdo do Usuário</h2>
            <p className="mb-3">
              Ao publicar ou enviar conteúdo ao Vagas de Trabalhos (incluindo currículos, descrições de vagas, comentários, avaliações), você declara e garante que:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>É o proprietário ou possui os direitos necessários sobre o conteúdo</li>
              <li>O conteúdo não viola direitos de terceiros (direitos autorais, privacidade, etc.)</li>
              <li>O conteúdo é preciso, verdadeiro e não é enganoso</li>
            </ul>
            <p className="mb-3">
              Você concede ao Vagas de Trabalhos uma licença mundial, não exclusiva, transferível e isenta de royalties para usar, reproduzir, modificar, adaptar, publicar e exibir o conteúdo que você submete, exclusivamente para os fins de operação e melhoria da plataforma.
            </p>
            <p>
              Reservamo-nos o direito de revisar, editar, recusar ou remover qualquer conteúdo que, a nosso critério, viole estes termos ou seja considerado inadequado, ofensivo ou potencialmente prejudicial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Propriedade Intelectual</h2>
            <p className="mb-3">
              Todo o conteúdo disponível no Vagas de Trabalhos, incluindo mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade do Vagas de Trabalhos ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
            </p>
            <p>
              A compilação de todo o conteúdo neste site é de propriedade exclusiva do Vagas de Trabalhos. Nenhuma parte deste site pode ser reproduzida, duplicada, copiada, vendida, revendida ou explorada para qualquer finalidade comercial sem o consentimento expresso por escrito do Vagas de Trabalhos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Limitação de Responsabilidade</h2>
            <p className="mb-3">
              O Vagas de Trabalhos atua exclusivamente como plataforma de intermediação entre candidatos e empresas. Portanto:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Não somos responsáveis por ofertas de emprego, processos de recrutamento, contratações ou negociações entre candidatos e empresas</li>
              <li>Não verificamos ou garantimos a veracidade, legalidade ou adequação de vagas publicadas</li>
              <li>Não garantimos que você conseguirá emprego através da plataforma</li>
              <li>Não somos responsáveis por perdas ou danos resultantes de interações entre usuários</li>
              <li>Não garantimos que o serviço será ininterrupto, seguro ou livre de erros</li>
            </ul>
            <p className="mb-3">
              O uso da plataforma é por sua conta e risco. O serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo.
            </p>
            <p>
              Em nenhuma circunstância o Vagas de Trabalhos, seus diretores, funcionários ou afiliados serão responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados, uso ou outros prejuízos intangíveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Indenização</h2>
            <p>
              Você concorda em defender, indenizar e isentar o Vagas de Trabalhos, suas afiliadas, licenciadores e prestadores de serviços, e seus respectivos diretores, funcionários, contratados, agentes e representantes de quaisquer reivindicações, responsabilidades, danos, julgamentos, perdas, custos, despesas ou honorários (incluindo honorários advocatícios razoáveis) resultantes de sua violação destes Termos de Uso ou de seu uso da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Modificações do Serviço</h2>
            <p>
              Reservamo-nos o direito de modificar, suspender ou descontinuar, temporária ou permanentemente, o serviço (ou qualquer parte dele) com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou descontinuação do serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">10. Lei Aplicável e Jurisdição</h2>
            <p>
              Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros, especificamente os da Comarca de São Paulo, Estado de São Paulo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">11. Disposições Gerais</h2>
            <p className="mb-3">
              Se qualquer disposição destes termos for considerada inválida ou inexequível, tal disposição será eliminada ou limitada na medida mínima necessária, e as disposições restantes continuarão em pleno vigor e efeito.
            </p>
            <p>
              O não exercício ou aplicação de qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia de tal direito ou disposição.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Contato</h2>
            <p className="mb-3">
              Em caso de dúvidas, comentários ou preocupações sobre estes Termos de Uso, entre em contato conosco através dos seguintes canais:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>E-mail:</strong> contato@vagasdetrabalhos.com</li>
              <li><strong>Site:</strong> vagasdetrabalhos.com</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDeUso;
