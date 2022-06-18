<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import img from "../assets/mh-logo.png";


const Navbar = () => {
  return (
    <>
      <div className="hero">
        <nav>
          <NavLink className="logo" to="/profile/home">
            <img src={img} alt="management-health-logo"></img>
          </NavLink>

          <div>
            <ul>
              <li>
                <NavLink to="/profile/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile/farmacia">Farmacia</NavLink>
              </li>
              <li>
                <NavLink to="/profile/profesionales">Profesionales</NavLink>
              </li>
              <li>
                <NavLink to="/profile/consultas">Consultas</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Perfil</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

=======
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import ImagenLogo from './assets/FrameLogo.png'
const Navbar = () => {
  return (
    <div className="sum">
      <Link className="logo" to="/">
       <img id="Navbar_logo" src={ImagenLogo}/>
      </Link>
      <nav className="item">
        <ul>
          <div className="ul">
            
            <li>
              <div className="Nav_DivLink"><Link className="Nav_Link" to="/">Home</Link></div>
            </li>

            <li>
           <div className="Nav_DivLink"><Link className="Nav_Link" to="/farmacia">Farmacia</Link></div>  
            </li>

            <li>
             <div className="Nav_DivLink"><Link className="Nav_Link" to="/profesionales">Profesionales</Link> </div>  
            </li>

            <li>
             <div className="Nav_DivLink"><Link className="Nav_Link" to="/consultas">Consultas</Link></div>  
            </li>

          </div>
        </ul>
      </nav>
    </div>
  );
};
>>>>>>> 0b79da5d9f69778ac16a34fdc4fd3d2dd00ff143
export default Navbar;
