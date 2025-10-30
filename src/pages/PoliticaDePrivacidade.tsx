import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

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
          <p className="text-muted-foreground mb-6">Última atualização: 22 de janeiro de 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Introdução</h2>
            <p className="mb-3">
              O Vagas de Trabalhos (vagasdetrabalhos.com) está comprometido em proteger a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossa plataforma.
            </p>
            <p className="mb-3">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis sobre proteção de dados no Brasil.
            </p>
            <p>
              Ao utilizar nossos serviços, você concorda com as práticas descritas nesta Política de Privacidade. Se você não concorda com qualquer parte desta política, não deverá utilizar nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Informações que Coletamos</h2>
            <p className="mb-3">
              Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
            </p>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">2.1 Informações Fornecidas Diretamente por Você</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><strong>Dados de Cadastro:</strong> nome completo, e-mail, telefone, CPF (quando aplicável), data de nascimento</li>
              <li><strong>Dados Profissionais:</strong> histórico de trabalho, formação acadêmica, habilidades, certificações, idiomas, pretensão salarial</li>
              <li><strong>Currículo e Documentos:</strong> arquivos de currículo, cartas de apresentação, portfólios, certificados</li>
              <li><strong>Dados da Empresa:</strong> razão social, CNPJ, endereço, ramo de atividade, número de funcionários</li>
              <li><strong>Conteúdo Gerado:</strong> descrições de vagas, avaliações de empresas, mensagens trocadas através da plataforma</li>
              <li><strong>Informações de Pagamento:</strong> dados de cartão de crédito e faturamento (processados por provedores terceiros seguros)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><strong>Dados de Navegação:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência</li>
              <li><strong>Cookies e Tecnologias Similares:</strong> identificadores únicos, preferências do usuário, histórico de pesquisas</li>
              <li><strong>Dados de Dispositivo:</strong> modelo do dispositivo, identificadores únicos do dispositivo, informações de rede móvel</li>
              <li><strong>Dados de Localização:</strong> localização aproximada baseada em endereço IP (não coletamos localização precisa sem seu consentimento)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">2.3 Informações de Terceiros</h3>
            <p>
              Podemos receber informações sobre você de parceiros, redes sociais (quando você autoriza integração) e fontes públicas para enriquecer seu perfil e melhorar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Como Utilizamos suas Informações</h2>
            <p className="mb-3">
              Utilizamos suas informações pessoais para as seguintes finalidades, com base legal conforme a LGPD:
            </p>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">3.1 Prestação e Melhoria dos Serviços</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Criar e gerenciar sua conta de usuário</li>
              <li>Processar candidaturas a vagas de emprego</li>
              <li>Conectar candidatos com oportunidades relevantes</li>
              <li>Permitir que empresas busquem e visualizem perfis de candidatos</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Melhorar e desenvolver novos recursos e funcionalidades</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">3.2 Comunicação</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Enviar notificações sobre vagas compatíveis com seu perfil</li>
              <li>Informar sobre atualizações de candidaturas</li>
              <li>Enviar newsletters e conteúdo relevante (com opção de cancelamento)</li>
              <li>Responder a suas solicitações e fornecer suporte</li>
              <li>Comunicar alterações nos termos de serviço ou políticas</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">3.3 Segurança e Prevenção de Fraudes</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Proteger contra fraudes, abusos e atividades ilegais</li>
              <li>Verificar identidade e autenticar usuários</li>
              <li>Monitorar e analisar tendências de uso e segurança</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">3.4 Marketing e Análise</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Realizar pesquisas de mercado e análises estatísticas</li>
              <li>Exibir anúncios e conteúdo relevante (com seu consentimento)</li>
              <li>Medir a eficácia de nossas campanhas de marketing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Compartilhamento de Informações</h2>
            <p className="mb-3">
              Podemos compartilhar suas informações nas seguintes circunstâncias:
            </p>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">4.1 Com Empresas Recrutadoras</h3>
            <p className="mb-3">
              Quando você se candidata a uma vaga ou permite que empresas visualizem seu perfil, compartilhamos as informações profissionais relevantes com as empresas anunciantes. Você tem controle sobre a visibilidade do seu perfil através das configurações de privacidade.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.2 Com Prestadores de Serviços</h3>
            <p className="mb-3">
              Compartilhamos dados com fornecedores que nos auxiliam na operação da plataforma, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Provedores de hospedagem e infraestrutura em nuvem</li>
              <li>Processadores de pagamento</li>
              <li>Serviços de e-mail e comunicação</li>
              <li>Ferramentas de análise e marketing</li>
              <li>Serviços de suporte ao cliente</li>
            </ul>
            <p className="mb-3">
              Todos os prestadores são contratualmente obrigados a proteger suas informações e usá-las apenas para os fins especificados.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.3 Por Razões Legais</h3>
            <p className="mb-3">
              Podemos divulgar suas informações quando:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Exigido por lei, regulamento ou processo legal</li>
              <li>Necessário para proteger nossos direitos, propriedade ou segurança</li>
              <li>Necessário para proteger os direitos, propriedade ou segurança de nossos usuários ou do público</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 mt-4">4.4 Transferências Empresariais</h3>
            <p>
              Em caso de fusão, aquisição, reorganização ou venda de ativos, suas informações podem ser transferidas como parte da transação, sempre com proteção adequada de dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Seus Direitos (LGPD)</h2>
            <p className="mb-3">
              De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li><strong>Confirmação e Acesso:</strong> confirmar se tratamos seus dados e acessar suas informações</li>
              <li><strong>Correção:</strong> corrigir dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> solicitar anonimização, bloqueio ou exclusão de dados desnecessários, excessivos ou tratados em desconformidade</li>
              <li><strong>Portabilidade:</strong> solicitar a portabilidade de seus dados a outro fornecedor de serviço</li>
              <li><strong>Eliminação:</strong> solicitar a eliminação de dados tratados com seu consentimento</li>
              <li><strong>Informação:</strong> obter informações sobre entidades públicas e privadas com as quais compartilhamos dados</li>
              <li><strong>Informação sobre Consentimento:</strong> ser informado sobre a possibilidade de não fornecer consentimento e suas consequências</li>
              <li><strong>Revogação de Consentimento:</strong> revogar seu consentimento a qualquer momento</li>
            </ul>
            <p className="mb-3">
              Para exercer qualquer um desses direitos, entre em contato conosco através de:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>E-mail:</strong> contato@vagasdetrabalhos.com</li>
              <li><strong>Assunto:</strong> "Solicitação LGPD - [seu direito]"</li>
            </ul>
            <p>
              Responderemos à sua solicitação em até 15 dias úteis. Em alguns casos, podemos solicitar informações adicionais para verificar sua identidade antes de processar a solicitação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Segurança dos Dados</h2>
            <p className="mb-3">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Criptografia de dados em trânsito e em repouso (SSL/TLS)</li>
              <li>Controles de acesso rigorosos e autenticação</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
              <li>Treinamento de equipe sobre proteção de dados</li>
              <li>Políticas de retenção e descarte seguro de dados</li>
            </ul>
            <p>
              No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Embora nos esforcemos para proteger suas informações, não podemos garantir segurança absoluta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Retenção de Dados</h2>
            <p className="mb-3">
              Retemos suas informações pessoais pelo tempo necessário para:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1">
              <li>Fornecer nossos serviços e cumprir as finalidades descritas nesta política</li>
              <li>Cumprir obrigações legais, regulatórias, fiscais e contábeis</li>
              <li>Resolver disputas e fazer cumprir nossos acordos</li>
            </ul>
            <p className="mb-3">
              Quando você solicita a exclusão de sua conta, removeremos ou anonimizaremos seus dados pessoais, exceto quando somos legalmente obrigados a mantê-los (por exemplo, para fins fiscais ou regulatórios).
            </p>
            <p>
              Dados de candidaturas e histórico de interações podem ser mantidos para fins estatísticos em formato anonimizado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Cookies e Tecnologias Similares</h2>
            <p className="mb-3">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência. Para informações detalhadas sobre nosso uso de cookies, consulte nossa <Link to="/politica-de-cookies" className="text-primary hover:underline">Política de Cookies</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Links para Sites de Terceiros</h2>
            <p>
              Nossa plataforma pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites. Recomendamos que você leia as políticas de privacidade de todos os sites que visitar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">10. Privacidade de Menores</h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se tomarmos conhecimento de que coletamos dados de um menor sem o consentimento dos pais, tomaremos medidas para excluir essas informações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">11. Transferência Internacional de Dados</h2>
            <p>
              Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. Quando transferimos dados internacionalmente, garantimos que medidas de proteção adequadas estejam em vigor, em conformidade com a LGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">12. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias. Notificaremos você sobre alterações significativas através do site ou por e-mail. A continuação do uso de nossos serviços após as alterações constitui aceitação da política revisada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. Contato e Encarregado de Dados (DPO)</h2>
            <p className="mb-3">
              Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>E-mail:</strong> contato@vagasdetrabalhos.com</li>
              <li><strong>Site:</strong> vagasdetrabalhos.com</li>
              <li><strong>Assunto:</strong> "Privacidade e Proteção de Dados"</li>
            </ul>
            <p className="mt-3">
              Você também tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD) se acreditar que o tratamento de seus dados pessoais viola a LGPD.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
