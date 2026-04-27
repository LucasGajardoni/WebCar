import css from "./Catalogo.module.css";
import Header from "../../src (1)/src/components/Header/Header.jsx";
import Footer from "../../src (1)/src/components/Footer/Footer.jsx";
import Card from "../../src (1)/src/components/Cards/Card.jsx";
import Filtro from "../../src (1)/src/components/Filtro/Filtro.jsx";
import { useState, useEffect } from "react";
import { API_URL } from "../../src (1)/src/App.jsx";



export default function Catalogo() {

    const [carros, setCarros] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarDados() {
            try {
                const response = await fetch(`${API_URL}/buscar_veiculo`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(carros)
                });

                if (!response.ok) {
                    setErro("Erro na API");
                    return;
                }

                const data = await response.json();
                setCarros(data.veiculos || data);

            } catch (error) {
                setErro("Erro ao conectar com o servidor");
                console.log(error);
            }
        }

        buscarDados();
    }, []);

    return (
        <>
            <Header />

            <div style={{ display: "flex" }}>
                <div className="col-lg-3">
                    <Filtro />
                </div>

                <div className="col-lg-9">

                    {erro && <p>{erro}</p>}

                    <div className="row">
                        {carros.map((carro) => (
                            <div className="col-md-4 mb-3" key={carro.id}>
                                <Card
                                    modelo={carro.modelo}
                                    valor={carro.valor}
                                    combustivel={carro.combustivel}
                                    ano={carro.ano}
                                    nome={carro.nome}
                                    km={carro.km}
                                    cambio={carro.cambio}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
