import React, { useEffect,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Consultas.css'
import {useParams} from 'react-router-dom';
import { Icon } from '@iconify/react';
import CardProfessional from './CardProfessional';

const Consultas =() => {
    const id = useParams()
   const [professionals, setProfessionals] = useState()

   const location = useLocation()
   
    useEffect(() => {

        fetch('http://localhost:3080/professional/getProfessionals')
        .then(resp => resp.json())
        .then(respJSON=> setProfessionals(respJSON.data))


        

     
    },[])

    console.log(id)


    if(!professionals) return 'Cargando profesionales'

    
  return (
    <>


<h1 style={{position:'relative',width:'90%',left:'8%',marginTop:'80px'}}>Pedi una consulta con alguno de los profesionales</h1>

<div style={{'display':'flex',marginTop:'20PX',justifyContent:'center',flexWrap:'wrap'}}>

    {professionals.map(item => (
        <CardProfessional id={item._id} name={item.name} lastname={item.lastname} professional={item.professional} time1={item.time1} time2={item.time2} geoLocation ={item.geoLocation} />
    ))}
</div>
    </>
  )
}

export default Consultas