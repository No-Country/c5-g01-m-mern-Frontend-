import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../assets/mh-logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
    {/* Logo Management Health */}
      <nav className="nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={img} alt="management-health-logo"></img>
        </Link>
    {/* Lista del Navbar */}
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "orange" : "")}
                to="/farmacia"
              >
                Farmacia
              </NavLink>
            </li>
            <li>
              <NavLink to="/profesionales">Profesionales</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "orange" : "")}
                to="/consultas"
              >
                Consultas
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "orange" : "")}
                to="/perfil"
              >
                Perfil
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
