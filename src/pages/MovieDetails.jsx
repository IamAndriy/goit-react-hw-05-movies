import { useFetchMovieDetails } from "hooks/useFetchMovieDetails";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
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

                        { movieDetails && <MovieInfo movie={movieDetails}/> }

                        { isLoading && <Loader/> }

                        { error && <p>{error}</p> }

                    </div>
                </section>
            </main>
}

export default MovieDetails;