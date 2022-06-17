import logo from "../assets/grupo-medicos-profesionales.png";
import DropDownEspecialidad from "../components/dropdowns/DropDownEspecialidad";
import DropDownProfesion from "../components/dropdowns/DropDownProfesion";
import DropDownZona from "../components/dropdowns/DropDownZona";
import "../views/Profesionales.css";

const Profesionales = () => {
  return (
    <>
      <div>
        <img src={logo} alt="grupo-médicos-foto"></img>
      </div>

      <div>
        <p>Búsqueda de profesional de salud</p>
      </div>

      <div className="dropdown-container">
        <div className="dropdown-left">
          <DropDownProfesion />
        </div>
        <div className="dropdown-center">
          <DropDownEspecialidad />
        </div>
        <div className="dropdown-right">
          <DropDownZona />
        </div>
          </div>
        <div >
          <button  className="dropdown-btn"
          type="submit">
            Buscar
          </button>
        </div>
    </>
  );
};

export default Profesionales;
