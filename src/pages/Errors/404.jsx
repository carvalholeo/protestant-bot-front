import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from '../../components/Breadcrumb';

function Error404() {
  const [pageInformations, setPageInformations] = useState({});
  const [sessionStorageContent, setSessionStorageContent] = useState("");
  const [localStorageContent, setLocalStorageContent] = useState("");
  const [showStorage, setShowStorage] = useState(false);
  const [showLog, setShowLog] = useState(false);

  useEffect(() => {
    const informations = {
      path: window.location.pathname,
      server: window.location.hostname,
      protocol: window.location.protocol,
      port: window.location.port,
      reference: window.location.href,
      origin: window.location.origin,
      hash: window.location.hash,
      search: window.location.search,
    };

    if (sessionStorage.length > 0 || localStorage.length > 0) {
      setShowStorage(true);
      setSessionStorageContent(sessionStorage.getItem("Teste"));
      setLocalStorageContent(localStorage.getItem("Teste"));
    }

    setPageInformations(informations);
  }, [showLog]);

  function handleShowLog(event) {
    event.preventDefault();

    setShowLog(true);
    const buttonShowLog = document.querySelector("#show-log");
    buttonShowLog.classList.add("d-none");
  }

  return (
    <main>
      <div className="container">
        <Breadcrumb message="Você está em: Perdi o sinal do local que você está" />

        <h1 className="text-center">Erro 404</h1>
        <p>
          Aparentemente, você acessou uma página que não existe mais (ou que
          nunca existiu). Isso pode ser por vários motivos, como por exemplo, um
          link compartilhado errado, um favorito de uma página removido ou que a
          página foi retirada do ar para manutenção, atualização ou porque não
          fazia mais sentido.
        </p>
        <p>
          Como você pode reslver? Bem, todas as páginas que eu tenho no meu
          site, estão disponíveis no menu ali em cima. Você pode acessar a{" "}
          <Link to="/">página inicial</Link> ou então{" "}
          <Link to="/contact">entrar em contato com meu criador</Link>. Se for a
          segunda opção, habilite a opção abaixo para visualizar e enviar as
          informações que irão aparecer.
        </p>

        <button
          className="btn btn-info mb-3"
          id="show-log"
          onClick={handleShowLog}
        >
          Mostrar log operacional
        </button>

        {showLog && (
          <>
            <h2>Detalhes do erro</h2>
            <h3>Dados de URL</h3>
            <pre>
              <code>
                <strong>Erro: </strong>404
                <br />
                <strong>Path: </strong>
                {pageInformations.path}
                <br />
                <strong>Servidor: </strong>
                {pageInformations.server}
                <br />
                <strong>Protocolo: </strong>
                {pageInformations.protocol}
                <br />
                <strong>Porta de acesso: </strong>
                {pageInformations.port}
                <br />
                <strong>URL completa: </strong>
                {pageInformations.reference}
                <br />
                <strong>Origem: </strong>
                {pageInformations.origin}
                <br />
                <strong>Hash: </strong>
                {pageInformations.hash}
                <br />
                <strong>Query de pesquisa: </strong>
                {pageInformations.search}
                <br />
              </code>
            </pre>
            {showStorage && (
              <>
                <h3>Dados de armazenamento</h3>
                <pre>
                  <code>
                    <strong>Armazenamento de sessão: </strong>
                    {sessionStorageContent}
                    <br />
                    <strong>Armazenamento local: </strong>
                    {localStorageContent}
                    <br />
                  </code>
                </pre>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Error404;
