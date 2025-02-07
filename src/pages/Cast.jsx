import { useFetchMovieCast } from "hooks/useFetchMovieCast";
import { Loader } from "components/Loader/Loader";
import { MovieCast } from "components/MovieCast/MovieCast";

const Cast = () => {
    
    const {list, isLoading, error} = useFetchMovieCast();
    
    return  <>
                { list.length > 0 && <MovieCast list={list}/> }

                { isLoading && <Loader/> }

                { error && <p className="error">{error}</p> }
            </>
}

export default Cast;