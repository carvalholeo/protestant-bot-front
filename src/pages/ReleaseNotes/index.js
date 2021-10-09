import { lazy, Suspense } from 'react';

import Loading from "../../components/Loading";

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const AnchorHTML = lazy(() => import("../../components/AnchorHTML"));

function ReleaseNotes() {
  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Histórico das versões"
          canonical="releasenotes"
          keywords="release notes bot lutero, release notes protestant bot, nova versão protestant bot, histórico protestant bot, código fonte protestant bot, código fonte bot lutero"
          description="Já passei por muitas mudanças e melhorias. Aqui, você tem uma ideia do que aconteceu ao longo do tempo, com um resumo das principais mudanças e atualizações. Saiba mais!"
        />
        <div className='container pb-4'>
          <Breadcrumb message="Histórico das Versões" />
          <h1>Histórico das versões - Release Notes</h1>

          <p>Nesta página, você encontra todas as informações sobre atualizações realizadas no sistema. Mais detalhes podem ser obtidos abaixo nos títulos das seções abaixo, que levará ao acesso do código-fonte e seu histórico detalhado.</p>
          <h2><AnchorHTML href="https://github.com/carvalholeo/protestant-bot-front" target="_blank" rel="noreferrer noopener">Histórico do site/app</AnchorHTML></h2>

          <details>
            <summary>08 de outubro de 2021</summary>
            <ul>
              <li>Atualização interna de dependências</li>
              <li>Correção de bug no rodapé</li>
              <li>Correção do nome da igreja do desenvolvedor do app</li>
              <li>Termos de uso e política de privacidade agora estão como tópicos, para melhorar leitura</li>
              <li>Novas cláusulas nos termos de uso e política de privacidade</li>
              <li>Inclusão de lista de tecnologias usadas no app e no bot</li>
            </ul>
          </details>

          <details>
            <summary>01 de outubro de 2021</summary>
            <ul>
              <li>Correção de bug no formulário de contato</li>
              <li>Redução do tamanho geral do app</li>
            </ul>
          </details>

          <details>
            <summary>29 de setembro de 2021</summary>
            <ul>
              <li>Melhoria nas notificações: agora o celular vibra quando uma notificação é recebida (somente com o app aberto)</li>
              <li>Atualizações de segurança internas</li>
            </ul>
          </details>

          <details>
            <summary>25 de setembro de 2021</summary>
            <ul>
              <li>Melhoria visual da confirmação de bloqueio</li>
              <li>Melhoria visual das áreas de alerta, quando o usuário está em modo claro</li>
            </ul>
          </details>

          <details>
            <summary>24 de setembro de 2021</summary>
            <ul>
              <li>Personalização do sistema de cores do app</li>
              <li>Inclusão de possibilidade de mudar esquema de cores</li>
            </ul>
          </details>

          <details>
            <summary>22 de setembro de 2021</summary>
            <ul>
              <li>Correção de bugs e melhorias de desempenho</li>
              <li>Correção de posicionamento do rodapé</li>
              <li>Correção da coleta de dados de desempenho</li>
              <li>Melhorias nas cores de textos de apoio</li>
            </ul>
          </details>

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

          <h2><AnchorHTML href="https://github.com/carvalholeo/protestant-bot" target="_blank" rel="noreferrer noopener">Histórico do bot</AnchorHTML></h2>
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
    </Suspense>
  );
}

export default ReleaseNotes;
