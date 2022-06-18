import logo from "../assets/grupo-medicos-profesionales.png";
import DropDownEspecialidad from "../components/dropdowns/DropDownEspecialidad";
import DropDownProfesion from "../components/dropdowns/DropDownProfesion";
import DropDownZona from "../components/dropdowns/DropDownZona";
import "../views/Profesionales.css";
import { useContext,useState} from "react";
import { DropdownsContext } from "../context/authContext";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Profesionales = () => {
  const [errorMessage, setErrormessage] = useState()
  const [professionals, setProfessionals] = useState()

  console.log(professionals)
  console.log(errorMessage)

  const {stateEspecialidad,stateProfesion,stateZona} = useContext(DropdownsContext)

  const getProfessional = ()=>{
    const data = {location:stateZona,professional:stateProfesion,specialty:stateEspecialidad}
    fetch('http://localhost:3080/professional/filter-Professionals',{
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(respJSON => {
      console.log(respJSON)
      if (respJSON.msg === 'Lamentablemente, no existe ningun profesional con estas caracteristicas'){
        setErrormessage('Lamentablemente, no existe ningun profesional con estas caracteristicas')
      }
      if(respJSON.msg ==='Success'){
        setProfessionals([respJSON.data])
      }
 })}





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
          <DropDownProfesion/>
        </div>
        <div className="dropdown-center">
          <DropDownEspecialidad />
        </div>
        <div className="dropdown-right">
          <DropDownZona />
        </div>
          </div>

<div style={{display:'flex',width:'100%',justifyContent:'center',marginTop:'10px'}}>
          { professionals?
        professionals.map(item => (
        <div key={item._id} id='Card_Background'>

        <div id='Card_Name'>
        
            <h1 id='Card_h1'>{item.name} {item.lastname}</h1>
            <p id='Card_professional'>{item.professional}</p>
        
            <div id='Card_StarsContainer'>
                <p id='Valoraciones'>Valoraciones</p>
                <div id='Stars'>
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
                <Icon icon="ant-design:star-filled" color="#ffc700" />
               <Icon icon="ant-design:star-filled" color="#BDBDBD" />
                </div>
            </div>
        
        
        </div>
        
        <div id='Card_description'>
        
        <p id='Card_descriptionTitle'>Días y horarios de atención</p>
        
        <p id='Card_time'>{item.time1}</p>
        <p id='Card_time2'>{item.time2}</p>
        
        <p id='Card_Ubicación'>Ubicación</p>
        <p id='Card_direccion'>Dirección : {item.geoLocation}</p>
        
        
            <Link to={`/profile/consultas/${item._id}`} id='Card_ConsultaDigital'>
            <Icon icon="bxs:calendar" style={{marginLeft:'5px',fontSize:'16px',marginRight:'5px',color:"#B632F4"}}  />
            <p style={{marginBottom:'0',fontSize:'10px'}}>Reservar consulta digital</p>
            </Link>
        
        
        </div>
        
        <div id='Card_Buttons'>
        <Link to={`/profile/consultasText/${item._id}`} id='Card_Enviar'>Enviar Consulta</Link>
        <Link to={`/profile/consultas/${item._id}`} id='Card_DigitalButton'>Consulta digital</Link>

        </div>
        
        </div>
        
        
    )) 
   : null
}
</div>
        {errorMessage ? <p>{errorMessage}</p> : null}  
          
        <div>
          <button onClick={getProfessional}  className="dropdown-btn"
          type="submit">
            Buscar
          </button>
        </div>
    </>
  );
};

export default Profesionales;
