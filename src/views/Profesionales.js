import logo from "../assets/grupo-medicos-profesionales.png";

const Profesionales = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="grupo-médicos-foto"></img>
      </div>
      <div>
        <p>Búsqueda de profesional de salud</p>
      </div>
      <div>
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default Profesionales;
