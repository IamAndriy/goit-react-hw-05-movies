import css from "./MovieCast.module.css";
import EmptyPhoto from "../../images/empty_photo.png";

export const MovieCast = ({list}) =>{

    return  <div className={css.castDiv} >
                <ul className={css.ul}>
                { 
                    list.map(({credit_id, profile_path, name, character}) => {

                        return <li className={css.li} key={credit_id}>

                                <div className={css.imgDiv}>
                                    <img 
                                        className={css.img}
                                        src={profile_path ? 'https://image.tmdb.org/t/p/w500'+ profile_path : EmptyPhoto} 
                                        alt={name +'photo'}
                                        />
                                </div>

                                <p className={css.name}>Actor: {name || "Unknown"}</p>
                                <p className={css.character}>Character : <span>{character || "Unknown" }</span></p>

                            </li>
                        })
                }
                </ul>
            </div>
}