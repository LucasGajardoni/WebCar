import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PaginaDeSucesso from "./pages/PaginaDeSucesso.jsx";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/PaginaDeSucesso" element={<PaginaDeSucesso/>}/>
            </Routes>
        </BrowserRouter>
    )
}