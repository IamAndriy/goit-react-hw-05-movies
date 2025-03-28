import css from "./MovieReviews.module.css";
import PropTypes from "prop-types";


export const MovieReviews = ({list}) =>{

    return  <div className={css.reviewsDiv}>
                <ul>
                    { 
                        list.map(({id, author='Unknown author', content='Empty review'}) => {
                                    return  <li className={css.li} key={id}>
                                                <p className={css.author}>Author: {author}</p>
                                                <p className={css.content}>{content}</p>
                                            </li>
                                })
                    }
                </ul>
            </div>
}

MovieReviews.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
}