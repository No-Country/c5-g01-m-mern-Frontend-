import img from "../assets/medica-home-logo.png";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Hero = () => {
  return (
    <>
      <div>
        <h1>Hacemos de su salud y bienestar</h1>
        <h1>nuestra prioridad.</h1>
      </div>
      <div>
        <Login />
        <Signup />
      </div>
      <div>
        <img src={img} alt="medica-imagen"></img>
      </div>
    </>
  );
};

export default Hero;
