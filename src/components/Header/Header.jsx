import { Link } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={"top-0 z-50 " + css.header}>
            <nav className="navbar">
                <div className="container-fluid d-flex align-items-center">

                    <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                        <img src="/Logo.png" alt="Logo" width="60" height="40"/>
                        <p className={"mt-2 " + css.azul }>Web<span className={css.cinza }>Car</span></p>
                    </a>

                    <form className="d-flex mx-4 flex-grow-1">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Buscar veículos..."
                            />
                    </form>

                    <div className="d-flex align-items-center gap-3">
                        <a className="nav-link" href="#">Comprar</a>
                        <a className="nav-link" href="#">Sobre nós</a>
                        <a className="nav-link" href="#">Entrar</a>

                        <Link className={"btn btn-primary " + css.corFundo} to="/Cadastro">
                            Cadastrar
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}