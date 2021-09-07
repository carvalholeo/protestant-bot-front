import Breadcrumb from '../components/Breadcrumb';
import analytics from '../services/analytics';

function ReleaseNotes() {
  analytics();
  return (
    <main>
    <div className='container'>
      <Breadcrumb message="Histórico das Versões" />
      <h1>Histórico de versões - Release Notes</h1>

      <p>Nesta página, você encontra todas as informações sobre atualizações realizadas no sistema. Mais detalhes podem ser obtidos abaixo nos títulos das seções abaixo, que levará ao acesso do código-fonte e seu histórico detalhado.</p>
      <h2><a href="https://github.com/carvalholeo/protestant-bot-front" target="_blank" rel="noreferrer noopener">Histórico do site/app</a></h2>
      <ul>
        <li>06 de setembro de 2021</li>
          <ul>
            <li>Melhoria de desempenho</li>
            <li>Correção de uma brecha nas variáveis de ambiente</li>
            <li>Atualização de segurança de componentes internos</li>
          </ul>
        <li>Agosto de 2021</li>
          <ul>
            <li>Remoção do Google Analytics e instalação de Analytics menos intrusivo</li>
          </ul>
        <li>04 de abril de 2021</li>
        <ul>
          <li>Versão inicial - 0.1</li>
          <ul>
            <li>Nessa primeira versão, foram liberados no site a opção de bloquear e desbloquear um perfil, a história e motivação do bot, termos de uso e meios de contato com o desenvolvedor.</li>
          </ul>
        </ul>
      </ul>

      <h2><a href="https://github.com/carvalholeo/protestant-bot" target="_blank" rel="noreferrer noopener">Histórico do bot</a></h2>
      <ul>
        <li>Agosto de 2021</li>
          <ul>
            <li>Bloqueio de palavras chaves da lista de tweets</li>
            <li>Seleção de termos para dar RT está mais dinâmica</li>
            <li>Logs internos melhores estruturados</li>
          </ul>
        <li>Abril de 2021</li>
        <ul>
          <li>Melhorias na manipulação de stream</li>
          <li>Conserto de bugs no retweet</li>
          <li>Implementação de filas de tweets</li>
          <li>Implementação de cuidado com a taxa limite do Twitter</li>
          <li>Abertura de API para uso no site</li>
        </ul>
        <li>Outubro de 2020</li>
        <ul>
          <li>Versão inicial - 0.1</li>
        </ul>
      </ul>
    </div>
  </main>
  );
}

export default ReleaseNotes;
