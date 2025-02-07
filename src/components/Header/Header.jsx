import {NavLink} from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {

    return  <header className={css.header}>
                <div className="container">
                    <nav className={css.nav}>
                        <NavLink to="/" className={css.link}>Home</NavLink>
                        <NavLink to="/movies" className={css.link}>Movies</NavLink>
                    </nav>
                </div>
            </header>

}