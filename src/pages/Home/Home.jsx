import { useFetchTrendingMovies } from "hooks/useFetchTrandingMovies";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";
import css from "./Home.module.css";

const Home = () =>  {

    const  {list, isLoading, error} = useFetchTrendingMovies();

    return  <main> 
                <section>
                    <div className="container">

                        <h1 className={css.title}>Trending movies</h1>

                        { (list.length > 0) && <MovieList movies={list}/> }

                        { isLoading && <Loader/> }

                        { error && <p className="error">{error}</p> }
                        
                    </div>
                </section>
            </main>

}

export default Home;