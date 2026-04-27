import SidebarMenu from "../../src (1)/src/components/SidebarMenu/SidebarMenu.jsx";
import Dashboard from "./Dashboard.jsx";
import css from "./RestritaAdm.module.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../src (1)/src/App.jsx";

export default function RestritaAdm() {

    const navigate = useNavigate();

    async function fazerLogout() {
        try {
            await fetch(`${API_URL}/logout`, {
                method: "POST",
                credentials: "include"
            });
        } catch (error) {
            console.log("Erro ao fazer logout");
        }

        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className={css.layout}>
            <SidebarMenu />
            <Dashboard />
        </div>
    );
}