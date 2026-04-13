import css from "./Dashboard.module.css";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div style={{display:"flex"}}>
                <SidebarMenu />
                <main className={css.dashboard}>
                    <h1 className={css.titulo}>Visão Geral</h1>

                    <section className={css.cards}>
                        <div className={css.card}>
                            <p className={css.cardLabel}>Saldo em Estoque</p>
                            <h2 className={css.cardValue}>R$40000,00</h2>
                        </div>

                        <div className={css.card}>
                            <div className={css.cardTop}>
                                <p className={css.cardLabel}>Despesa</p>
                                <button className={css.addButton}>+</button>
                            </div>
                            <h2 className={css.cardValue}>R$1000,00</h2>
                        </div>

                        <div className={css.card}>
                            <div className={css.cardTop}>
                                <p className={css.cardLabel}>Receita</p>
                                <button className={css.addButton}>+</button>
                            </div>
                            <h2 className={css.cardValue}>R$5000,00</h2>
                        </div>

                        <div className={css.card}>
                            <p className={css.cardLabel}>Saldo</p>
                            <h2 className={css.cardValue}>R$4000,00</h2>
                        </div>
                    </section>

                    <section className={css.chartSection}>
                        <h3 className={css.chartTitle}>Saldo</h3>

                        <div className={css.chart}>
                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar1}`}></div>
                                <span>JAN</span>
                            </div>

                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar2}`}></div>
                                <span>FEV</span>
                            </div>

                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar3}`}></div>
                                <span>MAR</span>
                            </div>

                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar4}`}></div>
                                <span>ABR</span>
                            </div>

                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar5}`}></div>
                                <span>MAIO</span>
                            </div>

                            <div className={css.barGroup}>
                                <div className={`${css.bar} ${css.bar6}`}></div>
                                <span>JUN</span>
                            </div>
                        </div>
                    </section>

                    <section className={css.tableSection}>
                        <table className={css.table}>
                            <thead>
                            <tr>
                                <th>TIPO</th>
                                <th>DESCRIÇÃO</th>
                                <th>VALOR</th>
                                <th>AÇÕES</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Despesa</td>
                                <td>Gasto com Pneus</td>
                                <td>R$:100,00</td>
                                <td>
                                    <button className={css.actionBtn}>✎</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>


                </main>
            </div>
            <Footer />
        </>
    );
}