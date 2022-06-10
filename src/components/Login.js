import { Form, Formik } from "formik";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GoogleLoginBtn from "./GoogleLoginBtn";
import TextField from "./TextField";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const validate = Yup.object({
    email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
    password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
        if(location.state?.form){
          navigate(location.state.form)
        }
      }}
    >
      {(formik) => (
        <div>
          <h1>Iniciar Sesión</h1>
          <Form>
            <TextField placeholder="Email" name="email" type="email" />
            <TextField
              placeholder="Contraseña"
              name="password"
              type="password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Continuar
            </button>
            <p>o</p>
            <span>Iniciar Sesión con Google</span>
            <div>
              <GoogleLoginBtn />
            </div>
            <p>No tienes una cuenta?</p> <Link to="/signup">Registrarse</Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Login;
