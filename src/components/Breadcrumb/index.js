import { useContext, useEffect, useState } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext";

function Breadcrumb({ message }) {
  const {isDark} = useContext(DarkModeContext);
  const [textLightClass, setTextLightClass] = useState('');

  useEffect(() => {
    if(isDark) {
      setTextLightClass('text-light');
      return;
    }
    setTextLightClass('text-dark');
  }, [isDark]);
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className={"breadcrumb-item " + textLightClass}>
          <small>Você está em {message}</small>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
