import { Form, Formik } from "formik";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import img from "../assets/medica-home-logo.png";
import TextField from "../components/TextField";
import { DropdownsContext, useAuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const {setUserInfo} = useContext(DropdownsContext)
  const [ErrorLogin, setErrorLogin] = useState()


  const validate = Yup.object({
    email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
    password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
  });
  return (
    <>
    <div style={{marginTop:'7%',marginLeft:'5%',display:'flex',justifyContent:'center'}}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={ async (values) => {
          
          const {email,password} = values
          const data = {email,password}

            fetch('http://localhost:3080/auth/logIn',{
              method:'POST',
              mode:'cors',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(resp => {
              console.log(resp.msg)
              if(resp.msg ==='No existe ningun usuario con este mail'){
              setErrorLogin(resp.msg)
              }
              else if(resp.msg === 'La contraseña es incorrecta'){
              setErrorLogin(resp.msg)
              }
              else{
                setUserInfo(resp)
                setTimeout(() => {
                  login();
                  navigate(state?.location?.pathname ?? "/");
                }, 500);
            
              }
            })      
        
        }}
      >
        {(formik) => (
          <div style={{width:'35%',marginTop:'5%'}}>
            <h1>Iniciar Sesión</h1>
            <Form onSubmit={formik.handleSubmit}>
              <TextField placeholder="Email" name="email" value={formik.values.email} type="email" />

              <TextField
                placeholder="Contraseña"
                name="password"
                value={formik.values.password}
                type="password"
              />

              <button
              style={{width:'45%',height:'50px',borderStyle:'none'}}
                type="submit"
                disabled={!formik.isValid}
              >
                Iniciar Sesión
              </button>

              <p>No tienes una cuenta?</p>
              <Link type="Iniciar Sesion" to="/signup">Registrarse</Link>
            </Form>
          </div>
        )}
      </Formik>
      <div>
        <img src={img} style={{height:'75vh',overflow:'hidden'}}  alt="medica-imagen"></img>
      </div>
      </div>
      

    </>

  );
};
export default Login;
