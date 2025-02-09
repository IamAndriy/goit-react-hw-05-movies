import { useFetchMovieDetails } from "hooks/useFetchMovieDetails";
import { useRef, Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { Loader } from "components/Loader/Loader";
import { GoBackBtn } from "components/GoBackBtn/GoBackBtn";
import { paths } from "routes";

const MovieDetails = () => {

    const {movieDetails, isLoading, error} = useFetchMovieDetails();

    const location = useLocation();
    const refLocation = useRef(location?.state?.from ?? paths.HOME);

    return  <main>
                <section>
                    <div className="container">
                        
                        <GoBackBtn path={refLocation.current}>Go back!</GoBackBtn>
                        
                        { movieDetails?.id && <MovieInfo movie={movieDetails}/> }
                        
                        { isLoading && <Loader/> }

                        { error && <p className="error">{error}</p> }

                        <Suspense fallback={<Loader/>}>
                            <Outlet/>
                        </Suspense>
                    
                    </div>
                </section>
            </main>
}

export default MovieDetails;