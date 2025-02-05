import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout} from "../SharedLayout/SharedLayout";
import NotFound from "pages/NotFound";
import { paths } from "routes";

const Home = lazy( () => import('../../pages/Home') );
const Movies = lazy( () => import('../../pages/Movies') );
const MovieDetails = lazy( () => import('../../pages/MovieDetails') );
const Cast = lazy( () => import('../../pages/Cast') );
const Reviews = lazy( () => import('../../pages/Reviews') );

export const App = () => {

    return  <>
                <Routes>
                    <Route path={paths.HOME} element={<SharedLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={paths.MOVIES} element={<Movies/>}/>
                        <Route path={paths.MOVIES_MOVIE_ID} element={<MovieDetails/>}>
                            <Route path={paths.MOVIE_CAST} element={<Cast/>}/>
                            <Route path={paths.MOVIE_REVIEWS} element={<Reviews/>}/>
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>                    
                </Routes>
            </>
}