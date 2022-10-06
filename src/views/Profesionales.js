import logo from "../assets/grupo-medicos-profesionales.png";
import DropDownEspecialidad from "../components/dropdowns/DropDownEspecialidad";
import DropDownProfesion from "../components/dropdowns/DropDownProfesion";
import DropDownZona from "../components/dropdowns/DropDownZona";
import { useContext,useState} from "react";
import { DropdownsContext } from "../context/authContext";
import { Link } from "react-router-dom";
import CardProfessional from "../components/CardProfessional";

const Profesionales = () => {
  const [errorMessage, setErrormessage] = useState()
  const [professionals, setProfessionals] = useState()

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
        setErrormessage(respJSON.msg)
        setProfessionals()
      }
      if(respJSON.msg ==='Success'){
        setProfessionals([respJSON.data])
        setErrormessage()
      }
 })}





  return (
    <>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img src={logo} alt="grupo-médicos-foto"></img>
      </div>

      <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{fontWeight:'bolder'}}>Búsqueda de profesional de salud</p>
      </div>

      <div style={{position:'relative',left:'20%',width:'60%',display:'flex',justifyContent:'space-around'}}>
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
          <CardProfessional id={item._id} name={item.name} lastname={item.lastname} professional={item.professional} time1={item.time1} time2={item.time2} geoLocation ={item.geoLocation} />
        
        
    )) 
   : null
}
</div>
        {errorMessage ? <div style={{width:'100%',display:'flex',marginTop:'80px',justifyContent:'center'}}> <div style={{background:'#FFDBDB',border:'2px solid red'}}><p style={{marginTop:'10px',padding:'10px',color:'red'}}>{errorMessage}</p></div></div> : null}  
          
        <div style={{display:'flex',justifyContent:'center',marginTop:'80px'}}>
          <button onClick={getProfessional}  style={{border:'none',width:'424px',backgroundColor:'#B632F4'}}
          type="submit">
            <p style={{paddingTop:'5%',paddingLeft:'44%',fontSize:'20px',color:'white',fontWeight:600,height:'54px'}}>Buscar</p>
          </button>
        </div>
    </>
  );
};

export default Profesionales;
