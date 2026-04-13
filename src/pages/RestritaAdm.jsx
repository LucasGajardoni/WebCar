import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Dashboard from "../pages/Dashboard";
import css from "./RestritaAdm.module.css";

export default function RestritaAdm() {
    return (
        <div className={css.layout}>
            <SidebarMenu />
            <Dashboard />
        </div>
    );
}