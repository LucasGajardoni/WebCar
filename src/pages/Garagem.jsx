import SidebarMenu from "../../src (1)/src/components/SidebarMenu/SidebarMenu.jsx";
import css from "./Garagem.module.css";
import Header from "../../src (1)/src/components/Header/Header.jsx";
import Footer from "../../src (1)/src/components/Footer/Footer.jsx";
import {Link} from "react-router-dom";

export default function Garagem() {
    return (
        <>
            <Header />
        <div className={css.layout}>
            <SidebarMenu />

            <main className={css.garagem}>
                <div className={css.topo}>
                    <h1 className={css.titulo}>Garagem</h1>

                    <button className={css.botaoNovo}>
                        <span className={css.mais}>⊕</span>
                        Novo Veículo
                    </button>
                </div>

                <section className={css.cards}>
                    <div className={css.card}>
                        <div className={`${css.iconeBox} ${css.azul}`}>
                            <span>▣</span>
                        </div>
                        <div>
                            <p className={css.cardLabel}>Estoque total</p>
                            <h2 className={css.cardValor}>142</h2>
                        </div>
                    </div>

                    <div className={css.card}>
                        <div className={`${css.iconeBox} ${css.verde}`}>
                            <span>$</span>
                        </div>
                        <div>
                            <p className={css.cardLabel}>Valor da garagem</p>
                            <h2 className={css.cardValor}>$244.845,00</h2>
                        </div>
                    </div>

                    <div className={css.card}>
                        <div className={`${css.iconeBox} ${css.laranja}`}>
                            <span>◫</span>
                        </div>
                        <div>
                            <p className={css.cardLabel}>Vendedores ativos</p>
                            <h2 className={css.cardValor}>28</h2>
                        </div>
                    </div>
                </section>

                <section className={css.tabelaBox}>
                    <table className={css.tabela}>
                        <thead>
                        <tr>
                            <th>MODELO</th>
                            <th>ANO</th>
                            <th>KM</th>
                            <th>PREÇO</th>
                            <th>AÇÕES</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>
                                <div className={css.modeloCell}>
                                    <img
                                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200"
                                        alt="Toyota Corolla"
                                    />
                                    <span>Toyota Corolla</span>
                                </div>
                            </td>
                            <td>2022</td>
                            <td>15,000 km</td>
                            <td className={css.preco}>$25000,00</td>
                            <td className={css.acoes}>🔧 ✎ 🗑</td>
                        </tr>

                        <tr>
                            <td>
                                <div className={css.modeloCell}>
                                    <img
                                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200"
                                        alt="Honda Civic"
                                    />
                                    <span>Honda Civic</span>
                                </div>
                            </td>
                            <td>2021</td>
                            <td>22,000 km</td>
                            <td className={css.preco}>$24500,00</td>
                            <td className={css.acoes}> <Link to="/">
                                🔧
                            </Link> </td>
                            <td className={css.acoes}> <Link to="/">
                                ✎
                            </Link> </td>
                            <td className={css.acoes}> <Link to="/">
                                🗑
                            </Link> </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={css.modeloCell}>
                                    <img
                                        src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=200"
                                        alt="Ford F-150"
                                    />
                                    <span>Ford F-150</span>
                                </div>
                            </td>
                            <td>2023</td>
                            <td>5,000 km</td>
                            <td className={css.preco}>$45000,00</td>
                            <td className={css.acoes}>🔧 ✎ 🗑</td>
                        </tr>

                        <tr>
                            <td>
                                <div className={css.modeloCell}>
                                    <img
                                        src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=200"
                                        alt="Chevrolet Onix"
                                    />
                                    <span>Chevrolet Onix</span>
                                </div>
                            </td>
                            <td>2020</td>
                            <td>45,000 km</td>
                            <td className={css.preco}>$12500,00</td>
                            <td className={css.acoes}>🔧 ✎ 🗑</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className={css.paginacao}>
                        <button className={css.paginaSeta}>‹</button>
                        <button className={`${css.pagina} ${css.ativa}`}>1</button>
                        <button className={css.pagina}>2</button>
                        <button className={css.pagina}>3</button>
                        <button className={css.paginaSeta}>›</button>
                    </div>
                </section>


            </main>
        </div>
            <Footer />
        </>
    );
}