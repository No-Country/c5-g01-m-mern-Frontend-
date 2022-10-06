import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function CardProfessional({name,lastname,id,professional,time1,time2,geoLocation}) {
  return (
    <div key={id} id='Card_Background'>

    <div id='Card_Name'>
    
        <h1 id='Card_h1'>{name} {lastname}</h1>
        <p id='Card_professional'>{professional}</p>
    
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
    
    <p id='Card_time'>{time1}</p>
    <p id='Card_time2'>{time2}</p>
    
    <p id='Card_Ubicación'>Ubicación</p>
    <p id='Card_direccion'>Dirección : {geoLocation}</p>
    
    
    
    
    </div>
    
    <div id='Card_Buttons'>
    <Link to={`/profile/consultasText/${id}`} id='Card_Enviar'>Enviar Consulta</Link>
    <Link to={`/profile/consultas/${id}`} id='Card_DigitalButton'>Consulta digital</Link>

    </div>
    
    </div>
    
  )
}

export default CardProfessional