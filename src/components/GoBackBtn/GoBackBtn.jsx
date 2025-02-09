import { Link } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go';
import css from "./GoBackBtn.module.css";
import PropTypes from "prop-types";


export const GoBackBtn = ({path, children}) => {

    return  <Link to={path} className={css.link}>
                <GoArrowLeft/>
                {children}
            </Link>    
}

GoBackBtn.propTypes = {
    path: PropTypes.object,
    children: PropTypes.node,
}
