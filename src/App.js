import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import {
  CONSULTAS,
  FARMACIA,
  HOME,
  LOGIN,
  LOGOUT,
  NOT_FOUND_PAGE,
  PROFESIONALES,
  PROFILE,
  SIGNUP,
} from "./config/routes/paths";
import { AuthContextProvider } from "./context/authContext";
import Consultas from "./views/Consultas";
import Farmacia from "./views/Farmacia";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import NotFoundPage from "./views/NotFoundPage";
import Profesionales from "./views/Profesionales";
import Profile from "./views/Profile";
import Signup from "./views/Signup";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <AuthContextProvider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={LOGIN} element={<Login />}></Route>
            <Route path={SIGNUP} element={<Register />}></Route>
            <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={HOME} element={<Home />}></Route>
            <Route path={FARMACIA} element={<Farmacia />}></Route>
            <Route path={PROFILE} element={<Profile />}></Route>
            <Route path={PROFESIONALES} element={<Profesionales />}></Route>
            <Route path={CONSULTAS} element={<Consultas />}></Route>
            <Route path={LOGOUT} element={<Logout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
