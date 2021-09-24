import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { DarkModeContext } from "../../contexts/DarkModeContext";

import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/collapse';

function Navbar() {
  const {isDark} = useContext(DarkModeContext);
  const [darkClass, setDarkClass] = useState('');
  const [textLightClass, setTextLightClass] = useState('');

  useEffect(() => {
    if(isDark) {
      setDarkClass('navbar-dark bg-dark');
      setTextLightClass('text-light');
      return;
    }
    setDarkClass('navbar-light bg-light');
    setTextLightClass('text-dark');
  }, [isDark]);

  return (
    <header>
      <nav className={"navbar navbar-expand-lg mb-3 fixed-top "+ darkClass}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Protestant Bot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className={"navbar-nav me-auto mb-4 mb-lg-0 " + textLightClass}>
              Bot cristão para o Twitter
            </span>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>
                  Sobre mim
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/block-manager">
                  Bloquear o bot
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contato
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/privacy">
                  Termos e privacidade
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/releasenotes">
                  Histórico
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
