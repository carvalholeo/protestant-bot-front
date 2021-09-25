import { useContext, useEffect, useState } from "react";

import { DarkModeContext } from "../../contexts/DarkModeContext";

function DarkModeToogler() {
  const { isDark, changeDarkMode } = useContext(DarkModeContext);
  const [btnDark, setBtnDark] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (isDark) {
      setIcon('bi bi-moon-fill');
      setBtnDark('btn-light');
      return;
    }
    setBtnDark('btn-warning');
    setIcon('bi bi-brightness-high-fill');
  }, [isDark]);

  function handleCheck(event) {
    event.preventDefault();
    if (isDark) {
      changeDarkMode(false);
      return;
    }
    changeDarkMode(true);
  }

  return (
    <>
      <input type="checkbox" id="dark-check" className="pe-1 btn-check" onClick={e => handleCheck(e)}/>
      <label htmlFor="dark-check" className={"btn btn-sm " + btnDark}>
        <span aria-label="Ativar/desativar modo escuro" aria-valuenow={isDark}><i className={icon}></i></span>
      </label>
    </>
  );
}

export default DarkModeToogler;
