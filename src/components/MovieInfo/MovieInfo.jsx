import { Link } from "react-router-dom";
import { paths } from "routes";
import emptyPoster from "../../images/empty_poster.png";
import css from "./MovieInfo.module.css";
import PropTypes from "prop-types";


export const MovieInfo = ({movie}) => {

    const {id, title='No title', poster_path, release_date, overview='There ara no overview', genres=[], vote_average = 0} = movie;
    const release_year = new Date(release_date).getFullYear();

    return  <>
                <div className={css.movieInfoDiv}>

                    <img className={css.img}
                         src={poster_path ? 'https://image.tmdb.org/t/p/w500/' + poster_path : emptyPoster} 
                         alt={title}
                    />
                
                    <div className={css.info}>

                        <h1 className={css.title}>{title} 
                            <span className={css.year}>({release_year})</span>
                        </h1>
                        
                        <p className={css.scoreTitle}>User score : 
                            <span className={css.score}> {Math.round(vote_average*10,0)}%</span>
                        </p>

                        <h2 className={css.overviewTitle}>Overview</h2>
                        <p className={css.overview}>{overview}</p>

                        <h2 className={css.genresTitle}>Ganres</h2>
                        <p className={css.genres}>{genres.map(item=> item.name).join(", ") || "Unknown"}</p>

                    </div>

                </div>

                <div className={css.addInfoDiv}>
                    <h3 className={css.addInfo}>Additional information</h3>

                    <ul className={css.ul}>

                        <li className={css.li}>
                            <Link className={css.link} to={`${paths.MOVIES}/${id}/cast`}>Cast</Link>
                        </li>

                        <li className={css.li}>
                            <Link className={css.link} to={`${paths.MOVIES}/${id}/reviews`}>Reviews</Link>
                        </li>

                    </ul>
                </div>
                
            </>
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
}