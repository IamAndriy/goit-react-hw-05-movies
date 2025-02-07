import css from "./MovieCast.module.css";

export const MovieCast = ({list}) =>{

    return  <div className={css.castDiv} >
                <ul>
                { 
                    list.map(({credit_id, profile_path, name, character}) => {

                        return <li className={css.li} key={credit_id}>

                                <div className={css.imgDiv}>
                                    {   profile_path
                                            ? <img 
                                                className={css.img}
                                                src={'https://image.tmdb.org/t/p/w500'+ profile_path} 
                                                alt={name +'photo'}
                                              />
                                            : <p className={css.imgMsg}>There are no photo of {name}</p>
                                    }
                                </div>

                                <p className={css.name}>Actor: {name || "Unknown"}</p>
                                <p className={css.character}>Character : <span>{character || "Unknown" }</span></p>

                            </li>
                        })
                }
                </ul>
            </div>
}