import SidebarMenu from "../../src (1)/src/components/SidebarMenu/SidebarMenu.jsx";
import css from "./Servicos.module.css";
import { useState } from "react";
import Header from "../../src (1)/src/components/Header/Header.jsx";
import Footer from "../../src (1)/src/components/Footer/Footer.jsx";

export default function Servicos() {
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    const [servicos, setServicos] = useState([
        {
            id_servico: 1,
            descricao: "Troca de óleo",
            valor: "120,00",
            vinculado: false,
        },
        {
            id_servico: 2,
            descricao: "Revisão completa",
            valor: "350,00",
            vinculado: true,
        },
        {
            id_servico: 3,
            descricao: "Alinhamento",
            valor: "90,00",
            vinculado: false,
        },
    ]);

    function excluirServico(id) {
        const servico = servicos.find((item) => item.id_servico === id);

        if (servico.vinculado) {
            setMensagem("Não é possível excluir este serviço, pois ele está vinculado a manutenções.");
            setTipoMensagem("danger");
            return;
        }

        const novaLista = servicos.filter((item) => item.id_servico !== id);
        setServicos(novaLista);
        setMensagem("Serviço excluído com sucesso.");
        setTipoMensagem("success");
    }

    return (
        <>
            <Header />
        <div className={`d-flex ${css.layout}`}>
            <SidebarMenu />

            <main className={`flex-grow-1 p-4 ${css.main}`}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <p className={`mb-2 ${css.breadcrumbTexto}`}>
                                Serviços <span className="mx-1">›</span> Listagem
                            </p>
                            <h1 className={`fw-bold mb-2 ${css.titulo}`}>Serviços</h1>
                            <p className={`mb-0 ${css.subtitulo}`}>
                                Visualize, edite e exclua os serviços cadastrados.
                            </p>
                        </div>

                        <button type="button" className={`btn ${css.botaoNovo}`}>
                            + Novo Serviço
                        </button>
                    </div>

                    {mensagem && (
                        <div className={`alert alert-${tipoMensagem} mb-4`} role="alert">
                            {mensagem}
                        </div>
                    )}

                    <div className={`card border-0 shadow-sm ${css.cardCustom}`}>
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead className={css.theadCustom}>
                                <tr>
                                    <th>ID</th>
                                    <th>DESCRIÇÃO</th>
                                    <th>VALOR</th>
                                    <th>VINCULADO</th>
                                    <th className="text-end">AÇÕES</th>
                                </tr>
                                </thead>

                                <tbody>
                                {servicos.map((servico) => (
                                    <tr key={servico.id_servico}>
                                        <td>{servico.id_servico}</td>
                                        <td className="fw-semibold">{servico.descricao}</td>
                                        <td>R$ {servico.valor}</td>
                                        <td>
                                            {servico.vinculado ? (
                                                <span className="badge text-bg-warning">Sim</span>
                                            ) : (
                                                <span className="badge text-bg-success">Não</span>
                                            )}
                                        </td>
                                        <td className="text-end">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light me-2"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => excluirServico(servico.id_servico)}
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {servicos.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-secondary">
                                            Nenhum serviço cadastrado.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
            <Footer />
        </>
    );
}