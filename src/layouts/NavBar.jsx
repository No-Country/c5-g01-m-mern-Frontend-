import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";
import img from "../assets/mh-logo.png";
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a className="navbar-box" href="/">
        <div>
          <NavLink  to="/">
            <img className="logo" src={img} alt="management-health-logo"></img>
          </NavLink>
        </div>
      </a>
      <div className="menu">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/">
                  Home
                </NavLink>
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/farmacia">
                  Farmacia
                </NavLink>
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/profesionales">
                  Profesionales
                </NavLink>{" "}
              </div>
            </li>
            <li>
              <div className="Nav_DivLink">
                <NavLink className="Nav_Link" to="/profile/consultas">
                  Consultas
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/profile/logout">Cerrar Sesión</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
