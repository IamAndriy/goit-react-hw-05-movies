import {Link, useLocation} from "react-router-dom";
import { paths } from "routes";
import css from "./MovieList.module.css";

export const MovieList= ({movies}) => {

    const location = useLocation();
    // console.log(location);
    
    return (movies.length > 0) &&   <ul className={css.list}>
                                        {movies.map(({id, title, year}) => <li className={css.li} key={id}>
                                                                                <Link to={`${paths.MOVIES}/${id}`} state={{from: location}} className={css.link}>
                                                                                    {title} {year}
                                                                                </Link>
                                                                           </li>
                                        )}
                                    </ul>
}