import { Link } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go';

export const GoBackBtn = ({path, children}) => {
    
    return  <Link to={path}>
                <GoArrowLeft/>
                {children}
            </Link>    
}