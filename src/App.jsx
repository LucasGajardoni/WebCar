import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import SucessoPag from "./pages/SucessoPag.jsx";
import RecuperarSenhaEmail from "./pages/RecuperarSenhaEmail.jsx";
import VerificarEmailSenha from "./pages/VerificarEmailSenha.jsx";
import TrocarSenha from "./pages/TrocarSenha.jsx";
import VerificarEmailConta from "./pages/VerificarEmailConta.jsx";
import Restrita from "./pages/Restrita.jsx";
import RestritaAdm from "./pages/RestritaAdm.jsx";
import RestritaVendedor from "./pages/RestritaVendedor.jsx";
import RotaRestrita from "./components/RotaRestrita.jsx";
import RotaAdm from "./components/RotaAdm.jsx";
import RotaVendedor from "./components/RotaVendedor.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/sucesso" element={<SucessoPag />} />
                <Route path="/recuperarSenhaEmail" element={<RecuperarSenhaEmail />} />
                <Route path="/verificarEmailSenha" element={<VerificarEmailSenha />} />
                <Route path="/trocarSenha" element={<TrocarSenha />} />
                <Route path="/verificarEmailConta" element={<VerificarEmailConta />} />

                <Route
                    path="/restrita"
                    element={
                        <RotaRestrita>
                            <Restrita />
                        </RotaRestrita>
                    }
                />

                <Route
                    path="/restrita-adm"
                    element={
                        <RotaAdm>
                            <RestritaAdm />
                        </RotaAdm>
                    }
                />

                <Route
                    path="/restrita-vendedor"
                    element={
                        <RotaVendedor>
                            <RestritaVendedor />
                        </RotaVendedor>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}