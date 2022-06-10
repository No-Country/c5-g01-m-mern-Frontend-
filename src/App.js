import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Signup from "./components/Signup";
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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/perfil" element={<ProfilePage />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/farmacia" element={<Farmacia />}></Route>
          <Route path="/profesionales" element={<Profesionales />}></Route>
          <Route path="/consultas" element={<Consultas />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
