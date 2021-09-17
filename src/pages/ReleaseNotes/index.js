import Breadcrumb from '../../components/Breadcrumb';
import HelmetWrapper from "../../components/HelmetWrapper";
import analytics from '../../services/analytics';

function ReleaseNotes() {
  analytics();
  return (
    <main>
      <HelmetWrapper title="Histórico das versões" canonical="releasenotes" />
      <div className='container pb-4'>
        <Breadcrumb message="Histórico das Versões" />
        <h1>Histórico das versões - Release Notes</h1>

        <p>Nesta página, você encontra todas as informações sobre atualizações realizadas no sistema. Mais detalhes podem ser obtidos abaixo nos títulos das seções abaixo, que levará ao acesso do código-fonte e seu histórico detalhado.</p>
        <h2><a href="https://github.com/carvalholeo/protestant-bot-front" className="link-light" target="_blank" rel="noreferrer noopener">Histórico do site/app</a></h2>
        <details>
          <summary>16 de setembro de 2021</summary>
          <ul>
            <li>Correção de bugs e melhorias de desempenho</li>
            <li>Preparação para criação de uma área restrita à administradores</li>
          </ul>
        </details>

        <details>
          <summary>13 de setembro de 2021</summary>
          <ul>
            <li>Inclusão de e-mail como forma de contato</li>
            <li>Desativar os botões do formulário de contato enquanto os dados estiverem sendo enviados</li>
            <li>Desativar os botões da página de bloqueio de usuários enquanto os dados estiverem sendo enviados</li>
          </ul>
        </details>

        <details>
          <summary>11 de setembro de 2021</summary>
          <ul>
            <li>Correção do aviso de campo de mensagem vazia na página de contato</li>
            <li>Melhoria da suavidade no carregamento de elementos</li>
            <li>Criação de avisos de atualização, app online e offline</li>
            <li>Correção de bug que fazia aparecer notificação vazia</li>
          </ul>
        </details>

        <details>
          <summary>09 de setembro de 2021</summary>
          <ul>
            <li>Melhorias visuais do sistema de alerta de bloqueio e desbloqueio</li>
            <li>Melhoria visual do aviso de tela carregando</li>
            <li>Melhoria visual da barra de navegação</li>
            <li>Correção de erro de falta de mensagem no carregamento do rodapé</li>
            <li>Melhoria da estrutura desta página de histórico</li>
            <li>Melhorias do texto da página inicial</li>
            <li>Inclusão do "Luterinho" na página inicial</li>
          </ul>
        </details>

        <details>
          <summary>08 de setembro de 2021</summary>
          <ul>
            <li>Criação de formulário de contato</li>
            <li>Criação de sistema para visualizar infos do app offline</li>
          </ul>
        </details>

        <details>
          <summary>06 de setembro de 2021</summary>
          <ul>
            <li>Melhoria de desempenho</li>
            <li>Correção de uma brecha nas variáveis de ambiente</li>
            <li>Atualização de segurança de componentes internos</li>
          </ul>
        </details>

        <details>
          <summary>Agosto de 2021</summary>
          <ul>
            <li>Remoção do Google Analytics e instalação de Analytics menos intrusivo</li>
          </ul>
        </details>

        <details>
          <summary>04 de abril de 2021</summary>
          <ul>
            <li>Versão inicial - 0.1</li>
            <ul>
              <li>Nessa primeira versão, foram liberados no site a opção de bloquear e desbloquear um perfil, a história e motivação do bot, termos de uso e meios de contato com o desenvolvedor.</li>
            </ul>
          </ul>
        </details>

        <hr />

        <h2><a href="https://github.com/carvalholeo/protestant-bot" className="link-light" target="_blank" rel="noreferrer noopener">Histórico do bot</a></h2>
        <details>
          <summary>13 de setembro de 2021</summary>
          <ul>
            <li>Envio de e-mail para os administradores quando um formulário de contato é enviado</li>
          </ul>
        </details>

        <details>
          <summary>08 de setembro de 2021</summary>
          <ul>
            <li>Implementação da estrutura inicial para receber formulários de contato</li>
          </ul>
        </details>

        <details>
          <summary>Agosto de 2021</summary>
          <ul>
            <li>Bloqueio de palavras chaves da lista de tweets</li>
            <li>Seleção de termos para dar RT está mais dinâmica</li>
            <li>Logs internos melhores estruturados</li>
          </ul>
        </details>

        <details>
          <summary>Abril de 2021</summary>
          <ul>
            <li>Melhorias na manipulação de stream</li>
            <li>Conserto de bugs no retweet</li>
            <li>Implementação de filas de tweets</li>
            <li>Implementação de cuidado com a taxa limite do Twitter</li>
            <li>Abertura de API para uso no site</li>
          </ul>
        </details>

        <details>
          <summary>Outubro de 2020</summary>
          <ul>
            <li>Versão inicial - 0.1</li>
          </ul>
        </details>
      </div>
    </main>
  );
}

export default ReleaseNotes;
