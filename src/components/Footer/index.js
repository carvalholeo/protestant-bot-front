import { lazy, Suspense } from "react";

import Loading from "../Loading";
const Twemoji = lazy(() => import("react-twemoji"));

function Footer() {
  return (
    <Suspense fallback={<Loading content="Montando página..." />}>
      <footer className="footer mt-auto py-3 bg-dark" id="footer">
        <Twemoji options={{ className: "emoji" }}>
          <section className="container text-center">
            <small className="text-light">
              Feito com <span className="emoji">♥</span> por Léo Carvalho no
              Guarujá/SP. <span className="emoji">🇧🇷</span>
            </small>
          </section>
        </Twemoji>
      </footer>
    </Suspense>
  );
}

export default Footer;
