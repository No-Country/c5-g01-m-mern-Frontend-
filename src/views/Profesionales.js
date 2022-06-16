import logo from "../assets/grupo-medicos-profesionales.png";
import DropDownEspecialidad from "../components/DropDownEspecialidad";
import DropDownProfesion from "../components/DropDownProfesion";
import DropDownZona from "../components/DropDownZona";

const Profesionales = () => {
  return (
    <>
      <div>
        <img src={logo} alt="grupo-médicos-foto"></img>
      </div>
      <div>
        <p>Búsqueda de profesional de salud</p>
      </div>
      <div>
        <DropDownProfesion />
      </div>
      <div>
        <DropDownEspecialidad />
      </div>
      <div>
        <DropDownZona/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <button>Buscar</button>
      </div>
    </>
  );
};

export default Profesionales;
