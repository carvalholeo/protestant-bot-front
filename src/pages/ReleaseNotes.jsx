import Breadcrumb from '../components/Breadcrumb';

function ReleaseNotes() {
  return (
    <main>
    <div className='container'>
      <Breadcrumb message="Você está em Histórico das Versões" />
      <h1>Histórico de versões - Release Notes</h1>

      <h2>Histórico do site</h2>
      <ul>
        <li>04 de abril de 2021</li>
        <ul>
          <li>Versão inicial - 0.1</li>
          <ul>
            <li>Nessa primeira versão, foram liberados no site a opção de bloquear e desbloquear um perfil, a história e motivação do bot, termos de uso e meios de contato com o desenvolvedor.</li>
          </ul>
        </ul>
      </ul>

      <h2>Histórico do bot</h2>
      <ul>
        <li>Outubro de 2020</li>
        <ul>
          <li>Versão inicial - 0.1</li>
        </ul>
        <li>Abril de 2021</li>
        <ul>
          <li>Melhorias na manipulação de stream</li>
          <li>Conserto de bugs no retweet</li>
          <li>Implemetação de filas de tweets</li>
          <li>Implementação de cuidado com a taxa limite do Twitter</li>
          <li>Abertura de API para uso no site</li>
        </ul>
      </ul>
    </div>
  </main>
  );
}

export default ReleaseNotes;
