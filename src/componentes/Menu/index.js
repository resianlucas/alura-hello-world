import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <NavLink
                    to="/"
                    className={({ isActive }) => `
                        ${styles.link}
                        ${isActive ? styles.linkDestacado : ""}
                    `}>
                    Inicio
                </NavLink>
                <NavLink
                    to="/sobremim"
                    className={({ isActive }) => `
                        ${styles.link}
                        ${isActive ? styles.linkDestacado : ""}
                    `}>
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    )
}