import { useFetchTrendingMovies } from "hooks/useFetchTrandingMovies";
import { MovieList } from "../components/MovieList/MovieList";
import { Loader } from "../components/Loader/Loader";


const Home = () =>  {

    const  {list, isLoading, error} = useFetchTrendingMovies();

    return  <main> 
                <section>
                    <div className="container">

                        <h1>Trending movies</h1>

                        { (list.length > 0) && <MovieList movies={list}/> }

                        { isLoading && <Loader/> }

                        { error && <p className="error">{error}</p> }
                        
                    </div>
                </section>
            </main>

}

export default Home;