import { useState } from "react"
import image from "../assets/images/Logo.jpg"
import "../assets/app.css"
import { Link, Routes, Route } from 'react-router-dom'
import Home from "../components/Home";
import Farmacia from "../components/Farmacia";
import Profesionales from "../components/Profesionales";
import Consultas from "../components/Consultas";



export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (      
        
      <nav className="navigation">
        <a className="navbar-box" href="/">
            <div className="navdebar-brand-icon">
                <img className="logo" src={image} alt="Logo Management Health" />
            </div>
        </a>
			  
          <div className="menu">
            <button className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
              {/* icon from heroicons.com */}
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }>
              <ul>
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
              </ul>
              <Routes>
                <Route path="Farmacia" element={<Farmacia /> } />
                  <Route index element= { <Home/> } />                  
                  <Route path="Profesionales" element= { <Profesionales/> } />
                  <Route path="Consultas" element= { <Consultas/> } />            
              </Routes>
            </div>
          </div>
      </nav>
    );
  }