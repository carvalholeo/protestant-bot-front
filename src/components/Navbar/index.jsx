import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 fixed-top">
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
            <span className="navbar-nav me-auto text-light mb-4 mb-lg-0">
              Bot cristão para o Twitter
            </span>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Sobre mim
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/block-manager">
                  Bloquear o bot
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contato
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacy">
                  Termos e privacidade
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/releasenotes">
                  Histórico
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
