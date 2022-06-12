import { NavLink } from "react-router-dom";
import img from "../assets/mh-logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Logo Management Health */}
      <div className="hero">
        <nav>
          <NavLink className="logo" to="/home">
            <img src={img} alt="management-health-logo"></img>
          </NavLink>
          {/* Lista del Navbar */}
          <div>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/farmacia">Farmacia</NavLink>
              </li>
              <li>
                <NavLink to="/profesionales">Profesionales</NavLink>
              </li>
              <li>
                <NavLink to="/consultas">Consultas</NavLink>
              </li>
              <li>
                <NavLink to="/perfil">Perfil</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
