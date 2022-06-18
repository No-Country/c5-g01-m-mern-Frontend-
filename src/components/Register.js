import React,{useState} from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import './styles/Register.css'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
import ImageBackground from './assets/adsa.png'
const Register =() => {

  
 const [errorMessageBackend, seterrorMessageBackend] = useState()
 const [successMessage, setSuccessMessage] = useState()

  const formik = useFormik({
    initialValues:{
      name:'',
      lastName:'',
      password:'',
      email:'',
      password1:'',
      cellphone:'',
    },
    validationSchema:Yup.object({

      name:Yup.string()
      .required('First name required'),
   
      lastName:Yup.string()
      .required('Last name required'),

      password:
      Yup.string()
      .required('Password required'),

      password1:
      Yup.string()
      .required('Password required'),

      email:
      Yup.string()
      .email('not email')
      .required('Email required'),

      cellphone:
      Yup.number()
      .required('Cellphone required'),

    }),
    onSubmit: async valores=>{
      console.log(valores)
      const {password,password1} = valores;
       if(password === password1){
          fetch('http://localhost:3000/auth/create-user',{
            method:'POST',
            mode:'cors',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(valores)
          })
          .then(resp=> resp.json())
          .then(respJSON => {
            console.log(respJSON)
             if(respJSON.msg === 'Ya existe un usuario con este mail'){
               seterrorMessageBackend(respJSON.msg)
               setSuccessMessage()
             }
             else{
                setSuccessMessage(respJSON.msg)
                seterrorMessageBackend()
             }
          })


    }
    else{
      seterrorMessageBackend('Password are not the same')
    }

  }})


  return (
    <>
    <Navbar/>
      <div>
        <form id='Register_Form'  onSubmit={formik.handleSubmit}>
          <div className='Register_InputDivs'>
              <label>First Name</label>
              <input className='Form_Inputs'  name='name' type='name' value={formik.values.name} onChange={formik.handleChange}  variant='filled'/> 
          </div>

          {formik.errors.name ?
             <div className='Form_ErrorMsg'>  
                 <p className='font-bold'>{formik.errors.name}</p>
             </div> 
             : null}

          <div className='Register_InputDivs'>
             <label>Last Name</label>
             <input className='Form_Inputs'  name='lastName' type='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
          </div> 

          {formik.errors.lastName ?
             <div className='Form_ErrorMsg'>  
                 <p className='font-bold'>{formik.errors.lastName}</p>
             </div> 
             : null}
          
          <div className='Register_InputDivs'>
           <label>E-mail</label>
           <input className='Form_Inputs'  type='email' name='email'  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
          </div>

          {formik.errors.email ?
             <div className='Form_ErrorMsg'>  
                 <p className='font-bold'>{formik.errors.email}</p>
             </div> 
             : null}
          
         
         <div className='Register_InputDivs'>
           <label>Password</label>
           <input className='Form_Inputs'  type='password' name='password'  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         </div>

         
         {formik.errors.password ?
             <div className='Form_ErrorMsg'>  
                 <p className='font-bold'>{formik.errors.password}</p>
             </div> 
             : null}
          
         
         <div className='Register_InputDivs'>
           <label>Re-Write password</label>
           <input className='Form_Inputs'  type='password'  value={formik.values.password1} onChange={formik.handleChange} onBlur={formik.handleBlur} name='password1' variant='filled'/> 
         </div>

         {formik.errors.password1 ?
             <div className='Form_ErrorMsg'>  
                 <p className='font-bold'>{formik.errors.password1}</p>
             </div> 
             : null}

        { errorMessageBackend? <div>{errorMessageBackend}</div> : null} 
        { successMessage? <div>{successMessage}</div> : null} 
         <button id='Form_buttonRegister' type='submit'>Registrate</button>
         <p id='Form_HaveAccount'>Tienes cuenta?  <Link id='Form_HaveAccLink' to='/'>Logueate</Link></p>

        </form>
        <img id='Background_Photo' src={ImageBackground}/>
        <div id='Background_Oblong'></div>
        <div id='Background_Oblong2'></div>
      </div>
    </>
  )
}

export default Register