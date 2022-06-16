import { Form, Formik } from "formik";
// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import img from "../assets/medica-home-logo.png";
import TextField from "../components/TextField";
import { useAuthContext } from "../context/authContext";

const Login = () => {
  // const EMAIL = "gabriel@mail.com";
  // const CONTRASENA = 12345678;

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  function handleClick() {
    login();
    navigate(state?.location?.pathname ?? "/");
  }

  const validate = Yup.object({
    email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
    password: Yup.string()
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .required("Contraseña requerida."),
  });
  return (
    <>
      <div>
        <h1>Hacemos de su salud y bienestar</h1>
        <h1>nuestra prioridad.</h1>
      </div>
      <div>
        <img src={img} alt="medica-imagen"></img>
      </div>
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
        }}
      >
        {(formik) => (
          <div>
            <h1>Iniciar Sesión para continuar</h1>
            <Form>
              <TextField placeholder="Email" name="email" type="email" />

              <TextField
                placeholder="Contraseña"
                name="password"
                type="password"
              />
              <button
                onClick={handleClick}
                type="submit"
                disabled={!formik.isValid}
              >
                Iniciar Sesión
              </button>

              <p>o</p>
              <span>Iniciar Sesión con Google</span>
              <div>{/* <GoogleLoginBtn /> */}</div>
              <p>No tienes una cuenta?</p>
              <Link to="/signup">Registrarse</Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Login;