import css from "../Header/Header.module.css";

export default function Footer() {
    return (
        <footer className="container py-5">

            <div className="row justify-content-between">

                <div className="col-md-4 mb-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <img src="/Logo.png" alt="Logo" width="60" height="40"/>
                        <p className={"m-0 " + css.azul}>
                            Web<span className={css.cinza}>Car</span>
                        </p>
                    </div>

                    <p className="text-secondary">
                        Líder em soluções modernas para compra e venda
                        de veículos. Gerencie seu estoque com
                        inteligência de dados.
                    </p>
                </div>

                <div className="col-md-2">
                    <h6 className="fw-bold">Empresa</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-secondary">
                                Sobre Nós
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link p-0 text-secondary">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <hr className="my-4"/>

            <div className="d-flex justify-content-between text-secondary small">

                <div>
                    © 2026 WebCar. Todos os direitos reservados.
                </div>

                <div>
                    🌐 Português (Brasil)
                </div>

            </div>

        </footer>
    );
}