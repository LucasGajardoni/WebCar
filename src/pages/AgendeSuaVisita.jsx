import css from "./AgendeSuaVisita.module.css"
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AgendarSuaVisita() {
    return (

        <>

            <Header />

            <div className={css.container}>
                <div className={css.card}>
                    <h2 style={{fontWeight:"bold"}}>Agende sua visita!</h2>
                    <p className={css.subtitulo}>
                        Agende uma visita para ver seu veículo na loja
                    </p>

                    <div className={css.form}>
                        <div className={(css.inputgroup)}>
                            <label style={{fontWeight:"500"}}>Nome completo</label>
                            <input className={css.seeelect} type="text" placeholder="Ex: Maria Silva dos Santos" />
                        </div>

                        <div className={css.inputgroup}>
                            <label style={{fontWeight:"500"}}>Número de celular</label>
                            <input className={css.seeelect} type="text" placeholder="(11) 0000-0000" />
                        </div>

                        <div className={css.inputgroup}>
                            <label style={{fontWeight:"500"}}>Data/Hora</label>
                            <input className={css.seeelect} type="text" placeholder="24/8/2026" />
                        </div>

                        <button className={css.btn}>
                            Confirmar <span>→</span>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}