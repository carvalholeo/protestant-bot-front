import { useContext, useEffect, useState } from "react";
import { lazy, Suspense } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import Loading from "../Loading";
const Twemoji = lazy(() => import("react-twemoji"));
const DarkModeToogler = lazy(() => import("../DarkModeToggler"));

function Footer() {
  const { isDark } = useContext(DarkModeContext);
  const [textLightClass, setTextLightClass] = useState('');

  useEffect(() => {
    if (isDark) {
      setTextLightClass('text-light');
      return;
    }
    setTextLightClass('text-dark');
  }, [isDark]);
  return (
    <Suspense fallback={<Loading content="Montando página..." />}>
      <footer className="footer mt-auto py-3 d-flex flex-shrink-0" id="footer">
        <Twemoji options={{ className: "emoji" }}>
          <section className="container text-center">
            <small className={textLightClass}>
              Feito com <span className="emoji">♥</span> por Léo Carvalho no
              Guarujá/SP. <span className="emoji">🇧🇷</span>
            </small>
          </section>
        </Twemoji>
        <section className="ms-auto pe-3">
          <DarkModeToogler />
        </section>
      </footer>
    </Suspense>
  );
}

export default Footer;
