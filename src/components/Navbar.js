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
export default Navbar;
