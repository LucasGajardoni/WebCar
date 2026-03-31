import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function RotaRestrita({ children }) {
    const [logado, setLogado] = useState(null);

    useEffect(() => {
        async function verificar() {
            try {
                const response = await fetch("http://10.92.3.145:5000/verificar_login", {
                    credentials: "include"
                });

                if (response.ok) {
                    setLogado(true);
                } else {
                    setLogado(false);
                }
            } catch {
                setLogado(false);
            }
        }

        verificar();
    }, []);

    if (logado === null) {
        return <p>Carregando...</p>;
    }

    if (!logado) {
        return <Navigate to="/login" />;
    }

    return children;
}