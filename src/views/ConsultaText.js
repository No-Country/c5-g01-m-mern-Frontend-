import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ConsultasText.css'
import Swal from 'sweetalert2'
const ConsultaText = () => {

  const id = useParams()

  const [professional, setProfessional] = useState()
  const [text, setText] = useState('Escriba su consulta aqui')

  console.log(text)

  const borrarTexto = (e)=>{
    e.preventDefault()
   setText('')
  }

  const submitText = (e)=>{
e.preventDefault()
    Swal.fire({
      icon: 'success',
      title: 'Su consulta ha sido enviada',
    })
  }

  useEffect(() => {

    if(id){
        fetch(`http://localhost:3080/professional/getProfessionalsId/${id.id}`)
        .then(resp => resp.json())
        .then(resp => setProfessional(resp))
    }

    console.log(professional)


}, [id])

if(!professional) return 'Cargando'

  return (
    <div >
         { professional ?
          <div id='card_Container'>
            <p id='Profesional_data'>{professional.data.name} {professional.data.lastname}</p>
            <p id='Profesional_skills'>{professional.data.professional} {professional.data.specialty}</p>
         
            <div style={{display:'flex',marginLeft:'1%'}} id=''>
                <p id='Profesional_valor'>Valoraciones</p>
                <div  style={{display:'flex',width:'1%'}}>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

         </div>
        : 'error' }

     
         <div id='Consulta_Background'>
          <div id='Consulta_CardBackground'>
           <form id='TextAreaForm'>
              <div>
               <textarea id="w3review" name="w3review" style={{width:'100%',height:'500px'}}>{text}</textarea>
             </div>
             <div id='Buttons_Container'>
               <button id='Delete_Text' onClick={borrarTexto}>Borrar</button>
               <button id='Submit_Text' onClick={submitText} type='submit'>Enviar</button>
             </div>
            </form> 
          </div>
        </div>
    </div>
  )
}

export default ConsultaText