import { useContext, useEffect, useState } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import DarkModeToogler from "../DarkModeToggler";

function Breadcrumb({ message }) {
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
    <nav aria-label="breadcrumb" className="d-flex">
      <ol className="breadcrumb">
        <li className={"breadcrumb-item" + textLightClass}>
          <small>Você está em {message}</small>
        </li>
      </ol>
      <section className="ms-auto pe-3">
        <DarkModeToogler />
      </section>
    </nav>
  );
}

export default Breadcrumb;
