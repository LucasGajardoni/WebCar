import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import css from "./VisualizarCarroAdm.module.css"

export default function VisualizarCarroAdm() {
    const imagens = [
        "/Car.png",
        "/Car.png",
        "/Car.png",
        "/Car.png",
        "/Car.png",
        "/Car.png",
        "/Car.png",
    ];

    const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

    return (
        <div className="container py-4">
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm p-3">
                        <div style={{ height: "420px", background: "#f8f9fa" }}>
                            <img
                                src={imagemPrincipal}
                                className="w-100 h-100 rounded"
                                style={{ objectFit: "cover" }}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                        </div>

                        <div className="d-flex flex-nowrap gap-2 mt-3 overflow-auto">
                            {imagens.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setImagemPrincipal(img)}
                                    className="rounded flex-shrink-0"
                                    style={{
                                        width: "110px",
                                        height: "70px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                        border: imagemPrincipal === img ? "2px solid #0d6efd" : "2px solid transparent",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="row g-3 mt-3">
                        {[
                            { icon: "speedometer2", title: "QUILOMETRAGEM", value: "12,400 mi" },
                            { icon: "gear", title: "PILOTO", value: "Manual" },
                            { icon: "fuel-pump", title: "COMBUSTÍVEL", value: "Gasolina" },
                            { icon: "palette", title: "COR", value: "Verde" },
                        ].map((item, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <div className="card text-center border-0 shadow-sm p-3 h-100">
                                    <i className={`bi bi-${item.icon} fs-4 text-primary mb-2`}></i>
                                    <small className="text-muted fw-semibold">{item.title}</small>
                                    <div className="fw-bold">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm p-4">
                        <small className="text-muted">Preço</small>
                        <h2 className="fw-bold">R$24,950</h2>

                        <div style={{display:"contents"}}>
                            <div style={{display:"contents"}}>
                                <label style={{fontWeight:"500"}}>Cliente</label>
                                <select className={(css.selectCliente) + " " + (css.seeelect)}>
                                    <option>Ryan Rivieira de Souza</option>
                                    <option>Maria Silva</option>
                                </select>
                            </div>

                            <div style={{display:"contents"}}>
                                <label style={{fontWeight:"500"}}>Forma de Pagamento</label>
                                <select className={(css.selectCliente) + " " + (css.seeelect)}>
                                    <option>PIX</option>
                                    <option>Cartão</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center gap-2">
                            <i className="bi bi-calendar"></i>
                            Agendar Visita
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm p-4">
                        <h5 className="fw-bold mb-3">Detalhes</h5>
                        <p className="text-muted mb-0">
                            Gurgel X-12, perfeitas condições, com histórico limpo e apenas um proprietário anterior. Equipado com os mais recentes recursos de segurança, um motor econômico e um interior premium, ele oferece o equilíbrio perfeito entre confiabilidade e estilo moderno.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
}
