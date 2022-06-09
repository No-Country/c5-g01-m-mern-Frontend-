import React from "react";
import img from "../assets/medica-home-logo.png";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Hacemos de su salud y bienestar</h1>
        <h1>nuestra prioridad.</h1>
      </div>
      <div>
        <LoginForm />
      </div>
      <div>
        <img src={img} alt="medica-imagen"></img>
      </div>
    </>
  );
};

export default HomePage;
