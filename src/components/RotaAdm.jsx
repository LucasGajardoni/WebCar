import { Navigate } from "react-router-dom";

export default function RotaAdm({ children }) {
    const usuarioNome = localStorage.getItem("usuario_nome");
    const usuarioTipo = localStorage.getItem("usuario_tipo");

    if (!usuarioNome) {
        return <Navigate to="/login" />;
    }

    if (usuarioTipo !== "0") {
        return <Navigate to="/" />;
    }

    return children;
}