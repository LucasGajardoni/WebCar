import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import css from "./EditarVeiculo.module.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function EditarVeiculo() {
    return (
        <>
            <Header />
        <div className={`d-flex ${css.layout}`}>
            <SidebarMenu />

            <main className={`flex-grow-1 p-4 ${css.main}`}>
                <div className="container-fluid">
                    <p className={`mb-2 ${css.breadcrumbTexto}`}>
                        Estoque <span className="mx-1">›</span> Editar Veículo
                    </p>

                    <h1 className={`fw-bold mb-2 ${css.titulo}`}>Editar veículo</h1>
                    <p className={`mb-4 ${css.subtitulo}`}>
                        Insira os dados técnicos e comerciais para disponibilizar o veículo no estoque.
                    </p>

                    <div className={`card border-0 shadow-sm mb-4 ${css.cardCustom}`}>
                        <div className="card-body p-4">
                            <h5 className={`fw-semibold mb-3 ${css.sectionTitle}`}>
                                📷 Fotos do Veículo
                            </h5>

                            <div className={css.areaFoto}>
                                <img
                                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200"
                                    alt="Veículo"
                                    className={css.imagemVeiculo}
                                />

                                <div className={css.overlayFoto}>
                                    <div className="text-center">
                                        <div className={css.iconeNuvem}>☁</div>
                                        <button type="button" className="btn btn-light btn-sm fw-semibold">
                                            Selecionar Fotos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-6">
                            <div className={`card border-0 shadow-sm h-100 ${css.cardCustom}`}>
                                <div className="card-body p-4">
                                    <h5 className={`fw-semibold mb-4 ${css.sectionTitle}`}>
                                        Informações Básicas
                                    </h5>

                                    <div className="mb-3">
                                        <label className={`form-label ${css.label}`}>Marca</label>
                                        <select className="form-select">
                                            <option>Toyota</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className={`form-label ${css.label}`}>Modelo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Corolla XEi"
                                        />
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Ano Fabricação</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="2019"
                                            />
                                        </div>

                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Ano Modelo</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="2020"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={`form-label ${css.label}`}>Documento</label>
                                        <select className="form-select">
                                            <option>Pago</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className={`card border-0 shadow-sm h-100 ${css.cardCustom}`}>
                                <div className="card-body p-4">
                                    <h5 className={`fw-semibold mb-4 ${css.sectionTitle}`}>
                                        Detalhes Técnicos
                                    </h5>

                                    <div className="row g-3 mb-3">
                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Quilometragem (km)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="48.000 km"
                                            />
                                        </div>

                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Combustível</label>
                                            <select className="form-select">
                                                <option>Flex</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Câmbio</label>
                                            <select className="form-select">
                                                <option>Automático</option>
                                            </select>
                                        </div>

                                        <div className="col-6">
                                            <label className={`form-label ${css.label}`}>Cor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Prata"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className={`form-label ${css.label}`}>Placa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="ABC-1D23"
                                        />
                                    </div>

                                    <div>
                                        <label className={`form-label ${css.label}`}>Renavam</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="01234567890"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`card border-0 shadow-sm mb-4 ${css.cardCustom}`}>
                        <div className="card-body p-4">
                            <h5 className={`fw-semibold mb-4 ${css.sectionTitle}`}>Precificação</h5>

                            <div className="row g-4">
                                <div className="col-12 col-md-6">
                                    <label className={`form-label ${css.label}`}>Valor de Custo (R$)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="R$ 85.000,00"
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className={`form-label ${css.label}`}>Valor de Venda (R$)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="R$ 95.000,00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end gap-3">
                        <button type="button" className="btn btn-light px-4 py-2 fw-semibold">
                            Cancelar
                        </button>

                        <button type="button" className={`btn px-4 py-2 fw-semibold ${css.botaoSalvar}`}>
                            💾 Salvar Informações
                        </button>
                    </div>
                </div>
            </main>
        </div>
            <Footer />
        </>

    );
}