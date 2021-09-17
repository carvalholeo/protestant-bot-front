import { lazy, Suspense } from "react";

import Loading from "../Loading";
const Twemoji = lazy(() => import("react-twemoji"));

function Footer() {
  return (
    <Suspense fallback={<Loading content="Montando página..." />}>
      <Twemoji options={{ className: "emoji" }}>
        <footer className="footer mt-auto py-3 bg-dark" id="footer">
          <section className="container text-center">
            <small className="text-light">
              Feito com <span className="emoji">♥</span> por Léo Carvalho no
              Guarujá/SP. <span className="emoji">🇧🇷</span>
            </small>
          </section>
        </footer>
      </Twemoji>
    </Suspense>
  );
}

export default Footer;
