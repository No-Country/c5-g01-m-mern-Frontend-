
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from './components/Register'

import './App.css';
import Consultas from "./components/Consultas";
import ConsultasId from "./components/ConsultasId";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/consultas" element={<Consultas/>}/>
    <Route path="/consultas/:id" element={<ConsultasId/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
