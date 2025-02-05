import {Link} from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {

    return  <header className={css.header}>
                <div className="container">
                    <nav>
                        <Link to="/" className={css.link}>Home</Link>
                        <Link to="/movies" className={css.link}>Movies</Link>
                    </nav>
                </div>
            </header>

}