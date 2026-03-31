import css from './Login.module.css';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function TrocarSenha() {

    function avancar(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />

            <div className={css.loginFundo}>
                <div className={css.cartao}>
                    <h2 className={css.h2}>Informe sua nova senha</h2>

                    <form onSubmit={avancar}>
                        <div className={css.linhaSenha}>
                            <div className={css.grupoCampo}>
                                <label className={css.rotuloCampo}>Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className={css.inputCadastro}
                                />
                            </div>

                            <div className={css.grupoCampo}>
                                <label className="rotulo-campo">Confirmar Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className={css.inputCadastro}
                                />
                            </div>
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn btn-primary" type="submit">
                                <Link to={"/login"} style={{color: 'white'}}>Avançar</Link>
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}