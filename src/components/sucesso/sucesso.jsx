import { useEffect } from "react";
import css from "./Sucesso.module.css";

export default function Sucesso({ mensagem, onClose }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={css.overlay}>
            <div className={css.card}>
                <div className={css.icon}>✓</div>

                <h1 className="fw-bold mt-3">Sucesso!</h1>

                <p className="text-muted mt-2">
                    {mensagem}
                </p>
            </div>
        </div>
    );
}