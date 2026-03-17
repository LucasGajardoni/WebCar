import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PaginaDeSucesso from "./pages/PaginaDeSucesso.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/loginsucesso" element={<PaginaDeSucesso />} />
      </Routes>
    </BrowserRouter>
  );
}