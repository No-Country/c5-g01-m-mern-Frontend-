import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ConsultasId =() => {
  const [professional, setProfessional] = useState()
    const id = useParams()

    const formik = useFormik({
    initialValues:{
     dateInquiry:''
    },
    validationSchema:Yup.object({

      dateInquiry:Yup.string()
      .required('Fecha requerida'),
    }),
    onSubmit: async valores=>{
      console.log(valores)
    }
  })

   
    useEffect(() => {

        if(id){
            console.log(id.id)
            fetch(`http://localhost:3000/professional/getProfessionalsId/${id.id}`)
            .then(resp => resp.json())
            .then(resp => setProfessional(resp))
        }

        console.log(professional)

    
    }, [id])

    if(!professional) return 'Cargando'



  return (
    <div>

      { professional ?
          <div style={{width:'300px',height:'100px',border:'1px solid #00EE76'}}>
            <p style={{marginBottom:'0',marginTop:'0'}}>{professional.data.name} {professional.data.lastname}</p>
            <p style={{marginBottom:'0'}}>{professional.data.professional} {professional.data.specialty}</p>
         
            <div style={{display:'flex'}} id=''>
                <p id='Valoraciones'>Valoraciones</p>
                <div  style={{display:'flex'}}>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>


            <form onSubmit={formik.handleSubmit}>
               <input value={formik.values.dateInquiry} onChange={formik.handleChange} name='dateInquiry' style={{width:'100px'}} type='date'/>
               <button type='submit'>Enviar fecha</button>
            </form>
          </div>
        : 'error' }
    </div>
  )
}

export default ConsultasId