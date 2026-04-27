import css from "./CadastrarMarca.module.css";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";


export default function CadastrarMarca() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState(null);
    const [preview, setPreview] = useState(null);

    const [erro, setErro] = useState("");

    function handleImagem(e) {
        const arquivo = e.target.files[0];

        if (arquivo) {
            setImagem(arquivo);
            setPreview(URL.createObjectURL(arquivo));
        }
    }

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    async function handleSubmit(e) {
        e.preventDefault();

        setErro("");

        if (!nome) {
            setErro("Preencha todos os campos");
            return;
        }

        const formData = new FormData();
        formData.append("nome", nome);


        if (imagem) {
            formData.append("imagem", imagem);
        }

        try {
            const response = await fetch(`${API_URL}/adicionar_marca`, {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (!response.ok) {
                setErro(data.mensagem);
                return;
            }

            navigate("/dashboard");

        } catch (error) {
            setErro("Erro ao conectar com o servidor");
        }
    }

    return (
        <>
            <Header />

            <main className={css.paginaCadastro}>
                <section className={css.areaCadastro}>
                    <h1 className={css.tituloCadastro}>Cadastre uma marca</h1>

                    <p className={css.subtituloCadastro}>
                        Adicione uma marca ao nosso sistema.
                    </p>

                    <div className={css.cardCadastro}>
                        <form className={css.formularioCadastro} onSubmit={handleSubmit}>

                            <div className={css.grupoCampo}>
                                <label>Nome</label>
                                <input
                                    type="text"
                                    placeholder="Digite o nome da marca"
                                    className={css.inputCadastro}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className={css.uploadArea}>
                                <div className={css.containerPreview}>
                                    {!preview && <img src="/Nuvem.png" alt="upload" />}

                                    <input
                                        type="file"
                                        className={css.inputImg}
                                        onChange={handleImagem}
                                    />

                                    {preview && (
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className={css.previewImagem}
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <button type="submit" className={css.botaoCadastro}>
                                    Cadastrar
                                </button>
                            </div>

                            {erro && (
                                <p className={css.erro}>
                                    {erro}
                                </p>
                            )}

                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
