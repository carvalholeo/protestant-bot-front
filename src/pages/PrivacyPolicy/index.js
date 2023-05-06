import { lazy, Suspense } from 'react';

import Loading from "../../components/Loading";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorLink = lazy(() => import("../../components/AnchorLink"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));
const Mark = lazy(() => import("../../components/Mark"));

function PrivacyPolicy() {
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Termos e privacidade"
          canonical="privacy"
          keywords="privacidade protestant bot, termos de uso protestant bot, regras protestant bot, regulamento protestant bot, privacidade bot lutero, termos de uso bot lutero, regras bot lutero, regulamento bot lutero"
          description="Eu sei, ninguém lê essa página, nem aguenta esse papo de advogado. Mas talvez você queira saber os seus direitos, o que pode ou não fazer comigo. Dá uma lida aqui."
        />
        <div className='container'>
          <Breadcrumb message="Termos e privacidade" />

          <h1>Termos e privacidade</h1>
          <p>Fico feliz que você esteja interessado em entender a parte jurídica do no programa. O código do site e do software em si, tem uma licença (uma espécie de contrato) específica. O funcionamento em si segue as regras abaixo.</p>
          <p>Tentei simplificar ao máximo os termos e cobrir a maior quantidade de casos possíveis. Mas espero que você entenda que isso é impossível. Por isso, se estiver em dúvida sobre alguma coisa nos termos de uso, por favor, me chama pra conversar.</p>
          <p>Antes de mais nada, preciso dizer que, ao usar postar conteúdo de acordo com os critérios definidos na nossa configuração, <Mark>você concorda integralmente com os termos.</Mark> Se você não concorda com algo, por gentileza, <Mark>NÃO USE O BOT.</Mark></p>

          <details>
            <summary>
              <h2 className="d-inline-block">Termos de uso</h2>
            </summary>
            <p>O programa, também chamado sistema, software, robô ou bot, foi pensado para ser usado para retweetar conteúdo baseado em critérios específicos, como termos e hashtags.</p>
            <p>Em geral, esses critérios são focados em temas cristãos, como, por exemplo:</p>
            <ul>
              <li>Dia da Reforma Protestante</li>
              <li>Natal</li>
              <li>Páscoa</li>
              <li>Pentecostes</li>
            </ul>
            <p>Na <AnchorHTML href="https://twitter.com/BotLutero">conta do bot no Twitter</AnchorHTML>, a mensagem fixada no topo contém qual a hashtag ou palavra que está sendo monitorada no momento, para poder compartilhar. Ou seja, nestes termos de uso, você não encontrará qual a hashtag monitorada.</p>
            <p>Por ser automatizado, não há um controle sobre quem pode ou não enviar um conteúdo que será retweetado. Assim sendo, os administradores se reservam à:</p>
            <ul>
              <li>remover conteúdo considerados inadequados</li>
              <li>apagar retweets que não tenham a ver com o critério</li>
              <li>retirar o retweet que possa ser SPAM (como pedidos de ajuda e fancams)</li>
              <li>bloquear aqueles que possam abusar do bot</li>
              <li>desligar o sistema, limitar a entrega de conteúdo ou atrasar retweet, para se adequar às regras do Twitter</li>
            </ul>
            <p>Há conteúdos que consideramos inaceitáveis e podem ser removidos sumariamente, bem como ocorrer o bloqueio dos autores. Exemplos de posts proibidos são listados abaixo, porém não limitados a estes:</p>
            <ul>
              <li>pornografia, explícita ou implícita</li>
              <li>qualquer conteúdo relacionado à pedofilia</li>
              <li>divulgação de pirâmides, golpes financeiros ou conteúdos sobre como burlar o Sistema Financeiro Nacional</li>
              <li>conteúdos de quaisquer formas de violência (psicológica, física, verbal ou física)</li>
              <li>compra, venda e divulgação de armas, drogas (lícitas ou ilícitas) ou outros produtos e serviços ilegais</li>
              <li>ofensas e quaisquer formas de assédio, agressão e tentativas de subjugamento de grupos minoritários e historicamente reprimidos, tais como (mas não se limitando a estes):</li>
              <ul>
                <li>mulheres</li>
                <li>pessoas LGBTQIA+</li>
                <li>pessoas negras</li>
                <li>pessoas periféricas</li>
              </ul>
              <li>qualquer outro conteúdo que os administradores entenderem que seja impróprio para o público do sistema, que é majoritariamente cristão</li>
            </ul>
            <p>O recurso de bloquear ou desbloquear o robô deve ser usado <Mark>APENAS</Mark> pelo dono da conta. Ao usar, você confirma ser o dono legítimo da conta. Entenda que nós não temos como confirmar se você é quem diz ser, sem invadir na sua privacidade.</p>
            <p>Usuários podem, através deste site, solicitar o bloqueio e desbloqueio de qualquer conta, devendo, no entanto, ser observado o parágrafo anterior. Usuários bloqueados por administradores não conseguem ser desbloqueados através do site, devendo solicitar uma análise do bloqueio, por meio da <AnchorLink to="/contact">página de contato</AnchorLink>. Reservamo-nos o direito de não desbloquear e não informar o motivo de bloqueio, tanto quanto podemos não responder às solicitações.</p>
            <p>O sistema pode ser desligado a qualquer momento, nenhuma forma de  aviso antecipado. Não há garantias que o software distribua todos os conteúdos, bem como não funcionar em todos os momentos. A disponibilidade não é garantida. Os usos do robô sem fora do escopo destes termos de uso não estão sob nossa responsabilidade e esperamos que você entenda que isso não constitui prejuízo a você de qualquer forma, não havendo nenhuma forma de ressarcimento por possíveis lucros cessantes.</p>
            <p>Embora eu tenha colocado os melhores esforços para garantir que o robô mantenha seu funcionamento contínuo, sob várias hipóteses e situações, não é possível dar qualquer garantia de que não haverão falhas. Isso quer dizer que solicitações de bloqueio, desbloqueio, tentativas de compartilhar conteúdo podem não acontecer ou nem mesmo entrar na fila de espera. Isso significa que, a exemplo do parágrafo anterior, você não sofrerá nenhum prejuízo e não tem nenhum direito a reembolsos sob nenhuma hipótese.</p>
            <p>Importante manter em mente que, por repostar conteúdo de acordo com uma hashtag ou marcação, os retweets são automáticos, sem revisão humana. Isso quer dizer que qualquer retweet <Mark>não significa que endossamos, apoiamos, concordamos ou estamos ligados ao criador de alguma forma.</Mark></p>
            <p>As dúvidas em relação a pontos controversos ou não explicados nestes termos, devem ser enviados para mim, através de um dos <AnchorLink to='/contact'>meios de contato disponíveis.</AnchorLink></p>
          </details>

          <details>
            <summary>
              <h2 className="d-inline-block">Política de Privacidade</h2>
            </summary>
            <p>Sua privacidade é importante para nós. Por isso, quero listar aqui tudo o que você tem direito, conforme a Lei Federal 13.709/2018 (Lei Geral de Proteção de Dados — LGPD). São eles:</p>
            <ul>
              <li>Proibir que seus posts sejam retweetados</li>
              <li>Solicitar relatório de quais dados estão nos bancos de dados</li>
              <li>Pedir que seus dados não sejam tratados</li>
              <li>Bloquear ou desbloquear o bot pelo nosso sistema</li>
              <li>Bloquear ou desbloquear o perfil do bot no Twitter</li>
            </ul>
            <p>Os dados guardados de forma compulsória no banco de dados são:</p>
            <ul>
              <li>do tweet:</li>
              <ul>
                <li>conjunto de informações sobre o tweet, quando ele está na fila de espera</li>
                <li>identificador do tweet, nome de usuário (a @ do Twitter), a mensagem original, a data e hora em que o conteúdo foi compartilhado</li>
              </ul>
            </ul>

            <p>Os dados armazenados somente a seu pedido no banco de dados são:</p>
            <ul>
              <li>do usuário:</li>
              <ul>
                <li>nome de usuário, para os casos em que é solicitado o bloqueio ou desbloqueio</li>
              </ul>
            </ul>

            <p>Outros dados que podem ser armazenados no banco de dados, por outros motivos, são:</p>
            <ul>
              <li>do usuário:</li>
              <ul>
                <li>nome de usuário, quando este é bloqueado por algum administrador</li>
                <li>comentários internos sobre o motivo do bloqueio ou desbloqueio</li>
                <li>nome de usuário, nome real, correio eletrônico e mensagem enviadas no formulário de contato</li>
              </ul>
            </ul>
            <ul>
              <li>do tweet:</li>
              <ul>
                <li>comentários internos sobre o motivo de um retweet ser desfeito</li>
              </ul>
            </ul>
            <ul>
              <li>no site</li>
              <ul>
                <li>dados de navegação, como páginas acessadas e local de origem (ou seja, se você digitou o site diretamente ou veio a partir de um link em redes sociais ou sites de busca)</li>
                <li>dados de desempenho do site, como o tempo de carregamento das páginas</li>
                <li>informações sobre o ambiente, como sistema operacional e sua versão, navegador e sua versão, altura e largura da tela, profundidade de cores, idioma, dispositivo e seu fabricante</li>
              </ul>
              <li><small><em>Mais informações sobre os dados coletados no site estão abaixo.</em></small></li>
            </ul>

            <p>Em todas as situações, você tem o direito de pedir que um retweet seja desfeito. Essa é uma ação manual e pode levar um tempo para ser concluída.</p>
            <p>O recurso de bloqueio não tem efeito para o passado, apenas para o futuro. Por exemplo, caso você solicite ao bot o bloqueio do seu usuário após um retweet, somente novas mensagens não serão retweetadas. O conteúdo antigo permanece na conta do bot e precisa ser desfeita manualmente, após uma solicitação sua.</p>
            <p>Se sua conta estiver trancada (perfil privado/com cadeado), seus posts <Mark>NÃO passam</Mark> pelo Bot Lutero. Nós só temos acesso a tweets feitos a partir de perfis públicos e, mesmo que tivéssemos acesso aos tweets privados, eles não podem ser repostados. Essa é uma regra do Twitter e nós não temos como mudar isso. Tweets compartilhados pelo bot antes do perfil se tornar privado deixam de ser visíveis na linha do tempo do bot e somente ficam disponíveis aos seguidores do autor do conteúdo.</p>
            <p>Os dados coletados no acesso ao site ficam armazenados de forma anonimizada no sistema de análise de dados. Isso quer dizer que não coletamos endereço IP, geolocalização ou outras formas que possam associar você a um determinado comportamento notado no site. Isso também significa que esses mesmos dados não te identificam, portanto, não temos como fornecer relatórios sobre seus dados guardados nesse sistema.</p>
            <p>O processo de coleta dos dados do site é feito usando o software <AnchorHTML href="https://ackee.electerious.com/" rel="noreferrer noopener" target="_blank">Ackee Analytics</AnchorHTML>, focado em privacidade do usuário. Estes dados ficam armazenados em um servidor particular meu, garantindo que somente eu tenha acesso a eles. Na <AnchorHTML href="https://docs.ackee.electerious.com/#/docs/Anonymization" target="_blank" rel="noreferrer noopener">documentação sobre anonimização</AnchorHTML>, você pode obter mais detalhes sobre como <Mark>NÃO identificamos você</Mark> por meio do seu acesso ao site.</p>
            <p>Os dados guardados nos arquivos e bancos de dados do sistema não serão vendidos a terceiros, nem compartilhados, tendo em vista que não há parceiros de negócios no projeto. No caso de encerramento do serviço e quando for possível identificar o titular do dado, este pode ser contatado para recebê-los de volta. Caso isso não seja possível, os dados serão destruídos, evitando riscos de vazamentos e usos indevidos.</p>
            <p>Na hipótese de venda, aluguel, arrendamento, ou repasse do software a terceiros, os dados guardados serão destruídos antes da efetivação da operação comercial e o titular do dado, quando possível, será notificado.</p>
            <p>Na situação em que houver alguma demanda judicial, ou formos instados a cooperar com alguma investigação, inquérito ou outras formas de persecução processual, os seus dados podem ser repassados às autoridades competentes, após análise da equipe jurídica. <Mark>Neste caso, você NÃO será informado sobre o procedimento realizado.</Mark> O mesmo vale para os casos em que houver determinação para bloqueio e desbloqueio de seu usuário no sistema, através de mandados judiciais.</p>
            <p>Segundo a LGPD, você deve poder ter uma forma de exercer seus direitos conosco. Para exercer esses direitos previstos na LGPD ou nesta política de privacidade, por favor, entre em contato abaixo:</p>
            <ul>
              <li>Leonardo Carvalho</li>
              <li><AnchorHTML href="mailto:privacidade@leocarvalho.dev" target='_blank' rel='noreferrer noopener'>privacidade@leocarvalho.dev</AnchorHTML></li>
            </ul>
            <p>O prazo para resposta é de até 10 dias úteis, considerando os Feriados Nacionais para contabilizar esse prazo.</p>
          </details>

          <details className="mb-4">
            <summary>
              <h3 className="d-inline block">Informações legais</h3>
            </summary>
            <p>Esse site é feito com várias tecnologias. Abaixo, há uma lista das que estão sendo utilizadas</p>
            <ul>
              <li><AnchorHTML href="https://ackee.electerious.com/" target='_blank' rel='noreferrer noopener'>Ackee Analytics</AnchorHTML>, sistema que coleta dados de acesso ao site/app</li>
              <li><AnchorHTML href="https://axios-http.com/" target='_blank' rel='noreferrer noopener'>Axios</AnchorHTML>, biblioteca que faz a conexão do app ao sistema/banco de dados</li>
              <li><AnchorHTML href="https://getbootstrap.com/" target='_blank' rel='noreferrer noopener'>Bootstrap</AnchorHTML>, framework que cria visual dos sites de forma rápida</li>
              <li><AnchorHTML href="https://icons.getbootstrap.com/" target='_blank' rel='noreferrer noopener'>Bootstrap Icons</AnchorHTML>, biblioteca de ícones que não sejam emojis</li>
              <li><AnchorHTML href="https://create-react-app.dev/" target='_blank' rel='noreferrer noopener'>Create React App</AnchorHTML>, estrutura que acelera a criação do app</li>
              <li><AnchorHTML href="https://reactjs.org/" target='_blank' rel='noreferrer noopener'>React</AnchorHTML>, que torna o site o mais parecido com um app</li>
              <li><AnchorHTML href="https://twemoji.twitter.com/" target='_blank' rel='noreferrer noopener'>Twemoji</AnchorHTML>, biblioteca que deixa todos os emojis do site no formato padrão do Twitter</li>
            </ul>
            <p>Já no sistema de apoio/banco de dados, há as seguintes tecnologias em uso:</p>
            <ul>
              <li><AnchorHTML href="https://ejs.co/" target="_blank" rel="noreferrer noopener">EJS</AnchorHTML>, para criar um visual nos e-mails enviados internamente</li>
              <li><AnchorHTML href="https://expressjs.com/" target="_blank" rel="noreferrer noopener">Express</AnchorHTML>, framework que gerencia as requisições do app</li>
              <li><AnchorHTML href="https://express-validator.github.io/docs/" target="_blank" rel="noreferrer noopener">Express Validator</AnchorHTML>, biblioteca de validação de dados enviados ao sistema</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/hpp" target="_blank" rel="noreferrer noopener">HPP</AnchorHTML>, módulo para limpar acessos à API e prevenir ataques de poluição HTTP</li>
              <li><AnchorHTML href="https://knexjs.org/" target="_blank" rel="noreferrer noopener">Knex.js</AnchorHTML>, para acesso ao banco de dados</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/morgan" target="_blank" rel="noreferrer noopener">Morgan</AnchorHTML>, usado na criação de logs de acesso à API</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/morgan-json" target="_blank" rel="noreferrer noopener">Morgan JSON</AnchorHTML>, para transformar os logs no formato JSON</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/mysql" target="_blank" rel="noreferrer noopener">MySQL Driver</AnchorHTML>, para acesso ao banco de dados</li>
              <li><AnchorHTML href="https://nodemailer.com/about/" target="_blank" rel="noreferrer noopener">Nodemailer</AnchorHTML>, sistema que envia e-mails</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/twitter-lite" target="_blank" rel="noreferrer noopener">Twitter Lite</AnchorHTML>, para fazer a conexão com a API do Twitter</li>
              <li><AnchorHTML href="https://www.npmjs.com/package/winston" target="_blank" rel="noreferrer noopener">Winston</AnchorHTML>, gerenciador de logs de acesso à API</li>
            </ul>
          </details>

        </div>
      </main>
    </Suspense>

  );
}

export default PrivacyPolicy;
