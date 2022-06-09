import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Consultas from "./pages/Consultas";
import Farmacia from "./pages/Farmacia";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Profesionales from "./pages/Profesionales";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path=" /*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/perfil" element={<ProfilePage />}></Route>
        <Route path="/farmacia" element={<Farmacia />}></Route>
        <Route path="/profesionales" element={<Profesionales />}></Route>
        <Route path="/consultas" element={<Consultas />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
