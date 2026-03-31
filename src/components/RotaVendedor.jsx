import { Navigate } from "react-router-dom";

export default function RotaVendedor({ children }) {
    const usuarioNome = localStorage.getItem("usuario_nome");
    const usuarioTipo = localStorage.getItem("usuario_tipo");

    if (!usuarioNome) {
        return <Navigate to="/login" />;
    }

    if (usuarioTipo !== "1") {
        return <Navigate to="/" />;
    }

    return children;
}