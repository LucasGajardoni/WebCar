import css from './Login.module.css';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RecuperarSenhaEmail() {
    const [email, setEmail] = useState("");

    function avancar(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />

            <div className={css.loginFundo}>
                <div className={css.cartao}>
                    <h2 className={css.h2}>Digite o email para receber o código</h2>

                    <form onSubmit={avancar}>
                        <div className={css.grupoInput}>
                            <label className={css.label}>E-mail</label>
                            <div className={css.input}>
                                <img src="/email.png" alt="Ícone do email" />
                                <input
                                    type="email"
                                    placeholder="User@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn btn-primary" type="submit">
                                <Link to={"/verificarEmailSenha"} style={{color: 'white'}}>Avançar</Link>
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}