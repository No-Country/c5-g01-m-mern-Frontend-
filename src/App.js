import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Farmacia from "./pages/Farmacia";
import Profesionales from "./pages/Profesionales";
import Consultas from "./pages/Consultas";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route path="*" element={<NotFoundPage/>}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/crearcuenta" element={<RegistrationForm />}></Route>
        <Route path="/iniciarsesion" element={<LoginForm />}></Route>
        <Route path="/perfil" element={<ProfilePage/>}></Route>
        <Route path="/farmacia" element={<Farmacia />}></Route>
        <Route path="/profesionales" element={<Profesionales />}></Route>
        <Route path="/consultas" element={<Consultas />}></Route>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
