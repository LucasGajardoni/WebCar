import css from "./Dashboard.module.css";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [saldoEstoque, setSaldoEstoque] = useState("R$0,00");
    const [despesa, setDespesa] = useState("R$0,00");
    const [receita, setReceita] = useState("R$0,00");
    const [saldo, setSaldo] = useState("R$0,00");
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarDashboard() {
            try {
                const response = await fetch("http://10.92.3.167:5000/dashboard", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                const data = await response.json();

                if (!response.ok) {
                    setErro(data.mensagem || "Erro ao buscar os dados da dashboard");
                    return;
                }

                setSaldoEstoque(data.saldo_estoque || "R$0,00");
                setDespesa(data.despesa || "R$0,00");
                setReceita(data.receita || "R$0,00");
                setSaldo(data.saldo || "R$0,00");
                setMovimentacoes(data.movimentacoes || []);
            } catch (error) {
                setErro("Erro ao conectar com o servidor");
            }
        }

        buscarDashboard();
    }, []);

    return (
        <>
            <Header />

            <div style={{ display: "flex" }}>
                <SidebarMenu />

                <main className={css.dashboard}>
                    <h1 className={css.titulo}>Visão Geral</h1>

                    {erro && (
                        <div className={css.mensagemErro}>
                            {erro}
                        </div>
                    )}

                    <section className={css.cards}>
                        <div className={css.card}>
                            <p className={css.cardLabel}>Saldo em Estoque</p>
                            <h2 className={css.cardValue}>{saldoEstoque}</h2>
                        </div>

                        <div className={css.card}>
                            <div className={css.cardTop}>
                                <p className={css.cardLabel}>Despesa</p>
                                <button className={css.addButton}>+</button>
                            </div>
                            <h2 className={css.cardValue}>{despesa}</h2>
                        </div>

                        <div className={css.card}>
                            <div className={css.cardTop}>
                                <p className={css.cardLabel}>Receita</p>
                                <button className={css.addButton}>+</button>
                            </div>
                            <h2 className={css.cardValue}>{receita}</h2>
                        </div>

                        <div className={css.card}>
                            <p className={css.cardLabel}>Saldo</p>
                            <h2 className={css.cardValue}>{saldo}</h2>
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
                            {movimentacoes.length > 0 ? (
                                movimentacoes.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.tipo}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.valor}</td>
                                        <td>
                                            <button className={css.actionBtn}>✎</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Nenhuma movimentação encontrada.</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>

            <Footer />
        </>
    );
}