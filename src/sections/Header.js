import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ArchiveContext } from "../store/contexts";

export default function Header({
  isArchiveListCollapsed,
  toggleIsArchiveListCollapsed,
  toggleIsMobileMenuCollapsed,
  setIsMobileMenuCollapsed,
  isMobileMenuCollapsed,
  archives,
}) {
  const { archive, setArchive } = useContext(ArchiveContext);
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
              isMobileMenuCollapsed ? "" : "show"
            }`}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/block">
                  Blocks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/transaction">
                  Transactions
                </NavLink>
              </li>
            </ul>

            <div className="navbar-nav dropdown d-flex mr-lg-n3">
              <button
                className="btn-account w-100"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggleIsArchiveListCollapsed}
              >
                <span className="account-summary">
                  <span className="account-name text-capitalize">
                    {archive.network}{" "}
                    <span
                      className={`oi oi-chevron-${
                        isArchiveListCollapsed ? "bottom" : "top"
                      } ml-2`}
                    ></span>
                  </span>
                </span>
              </button>

              <div
                className={`dropdown-menu dropdown-menu-right ${
                  isArchiveListCollapsed ? "" : "show"
                }`}
              >
                <div className="dropdown-arrow mr-3"></div>
                {archives.map((a) => (
                  <span
                    className="dropdown-item"
                    key={a.genesisHash}
                    onClick={() => {
                      setArchive(a);
                      toggleIsArchiveListCollapsed();
                      setIsMobileMenuCollapsed(true);
                    }}
                  >
                    <span className="dropdown-icon oi oi-globe"></span>{" "}
                    <span className="text-capitalize">{a.network}</span>
                  </span>
                ))}
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
