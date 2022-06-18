import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './styles/Consultas.css'
import {useParams} from 'react-router-dom';

const Consultas =() => {
    const id = useParams()
   const [professionals, setProfessionals] = useState()
   
    useEffect(() => {

        fetch('http://localhost:3000/professional/getProfessionals')
        .then(resp => resp.json())
        .then(respJSON=> setProfessionals(respJSON.data))

     
    },[])


    console.log(professionals)
    console.log(id)


    if(!professionals) return 'Cargando profesionales'

    
  return (
    <>

    <Navbar/>



<h1 style={{marginLeft:'20px',marginTop:'20px'}}>Pedi una consulta con alguno de los profesionales</h1>

<div style={{'display':'flex',marginTop:'20PX',justifyContent:'center',flexWrap:'wrap'}}>

    {professionals.map(item => (
        <div id='Card_Background'>
        <div id='Card_Name'>
        
            <h1 id='Card_h1'>{item.name} {item.lastname}</h1>
            <p id='Card_professional'>{item.professional}</p>
        
            <div id='Card_StarsContainer'>
                <p id='Valoraciones'>Valoraciones</p>
                <div id='Stars'>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
        
        
        </div>
        
        <div id='Card_description'>
        
        <p id='Card_descriptionTitle'>Días y horarios de atención</p>
        
        <p id='Card_time'>{item.time1}</p>
        <p id='Card_time2'>{item.time2}</p>
        
        <p id='Card_Ubicación'>Ubicación</p>
        <p id='Card_direccion'>Dirección : {item.geoLocation}</p>
        
        
            <button id='Card_ConsultaDigital'>
                Reservar Consulta digital
            </button>
        
        
        </div>
        
        <div id='Card_Buttons'>
        <button id='Card_Enviar'>Enviar Consulta</button>
        <Link to={`/consultas/${item._id}`} id='Card_DigitalButton'>Consulta digital</Link>
        </div>
        
        </div>
        
        
    ))}
</div>
    </>
  )
}

export default Consultas