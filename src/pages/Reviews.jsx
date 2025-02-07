import { useFetchMovieReviews } from "hooks/useFetchMovieReviews";
import { Loader } from "components/Loader/Loader";
import { MovieReviews } from "components/MovieReviews/MovieReviews";

const Reviews = () => {
    
    const {list, isLoading, error} = useFetchMovieReviews();
    
    return  <>
                { list.length > 0 && <MovieReviews list={list}/> }

                { isLoading && <Loader/> }

                { error && <p className="error">{error}</p> }
            </>
}

export default Reviews;