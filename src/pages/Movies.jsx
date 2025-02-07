import { SearchForm } from "components/SearchForm/SearchForm";
import { MovieList } from "components/MovieList/MovieList";
import { Loader } from "components/Loader/Loader";
import { useFetchMoviesByQuery } from "hooks/useFetchMoviesByQuery";

const Movies = () => {

    const {list, isLoading, error, onChangeParams} = useFetchMoviesByQuery();

    return  <main>
                <section>
                    <div className="container">

                        <SearchForm onSubmit={onChangeParams}/>
                        
                        { list.length > 0 && <MovieList movies={list}/> }

                        { isLoading && <Loader/> }

                        { error && <p className="error">{error}</p> }

                    </div>
                </section>
            </main>
}
export default Movies;