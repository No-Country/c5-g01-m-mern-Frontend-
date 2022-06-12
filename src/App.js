import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Signup from "./components/Signup";
import Consultas from "./pages/Consultas";
import Farmacia from "./pages/Farmacia";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Profesionales from "./pages/Profesionales";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/iniciarsesion" element={<Login />}></Route>
        <Route path="/registrarse" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Hero />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/farmacia" element={<Farmacia />}></Route>
          <Route path="/profesionales" element={<Profesionales />}></Route>
          <Route path="/consultas" element={<Consultas />}></Route>
          <Route path="/perfil" element={<ProfilePage />}></Route>
        </Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
