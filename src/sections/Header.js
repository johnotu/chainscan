import { Link } from "react-router-dom";

export default function Header({
  isChainListCollapsed,
  toggleisChainListCollapsed,
  toggleIsMobileMenuCollapsed,
  isMobileMenuCollapsed,
}) {
  return (
    <header className="app-header app-header-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-lg-0">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h4>Chainscan</h4>
          </a>

          <button
            className="hamburger hamburger-squeeze d-flex d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleIsMobileMenuCollapsed}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isMobileMenuCollapsed ? "show" : ""
            }`}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/block">
                  Blocks <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transfer">
                  Transfers
                </Link>
              </li>
            </ul>

            <div className="navbar-nav dropdown d-flex mr-lg-n3">
              <button
                className="btn-account w-100"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggleisChainListCollapsed}
              >
                {/* <span className="user-avatar user-avatar-md mr-lg-0">
                  <img src="assets/images/avatars/profile.jpg" alt="" />
                </span> */}
                <span className="account-summary">
                  <span className="account-name">Polkadot</span>
                  {/* <span className="account-description">Marketing Manager</span> */}
                </span>
              </button>

              <div
                className={`dropdown-menu dropdown-menu-right ${
                  isChainListCollapsed ? "show" : ""
                }`}
              >
                <div className="dropdown-arrow mr-3"></div>
                {/* <h6 className="dropdown-header d-none d-lg-block d-lg-none">
                  Polkadot
                </h6> */}
                <span className="dropdown-item" href="user-profile.html">
                  <span className="dropdown-icon oi oi-person"></span> Kusama
                </span>
                <span className="dropdown-item" href="auth-signin-v1.html">
                  <span className="dropdown-icon oi oi-account-logout"></span>{" "}
                  Moonbeam
                </span>
                <div className="dropdown-divider"></div>
                <span className="dropdown-item">Development</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
