import { lazy, Suspense } from "react";

import Loading from "../../../components/Loading";

const Breadcrumb = lazy(() => import("../../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../../components/HelmetWrapper"));
const AnchorLink = lazy(() => import("../../../components/AnchorLink"));

function Error404() {
  return (
    <Suspense fallback={<Loading message="Algo de errado não está certo!" />}>
      <main>
        <HelmetWrapper title="Erro 404 - Página não encontrada" />
        <div className="container">
          <Breadcrumb message="'Perdi o sinal do local que você está'" />

          <h1 className="text-center">Erro 404</h1>
          <p>
            Aparentemente, você acessou uma página que não existe mais (ou que
            nunca existiu). Isso pode ser por vários motivos, como por exemplo,
            um link compartilhado errado, um favorito de uma página removido ou
            que a página foi retirada do ar para manutenção, atualização ou
            porque não fazia mais sentido.
          </p>
          <p>
            Como você pode reslver? Bem, todas as páginas que eu tenho no meu
            site, estão disponíveis no menu ali em cima. Você pode acessar a{" "}
            <AnchorLink to="/">página inicial</AnchorLink>.
          </p>
        </div>
      </main>
    </Suspense>
  );
}

export default Error404;
