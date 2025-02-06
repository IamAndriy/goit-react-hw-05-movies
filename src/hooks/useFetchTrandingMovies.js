import { useState, useEffect } from "react";
import { getTrendingMovies} from "../Api/api";

export const useFetchTrendingMovies = () => {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        
        const abortCtrl = new AbortController();

        const fetchData = async () => {
            try{
                setIsLoading(true);
                const data = await getTrendingMovies(abortCtrl);
                if (data.length === 0){ 
                        setError("Opps! Something went wrong. Try reload the page.");
                }
                const movieList = data.map(({id, title, release_date}) => {
                                                return {
                                                            id,
                                                            title,
                                                            year: new Date(release_date).getFullYear()
                                                        }
                                            });
                setList(movieList);
            }catch(err){
                if (!abortCtrl.signal?.aborted){
                    setError(err);
                }
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();

        return () => {
            abortCtrl.abort();
        }

    }, []);

    return {list, isLoading, error};
}
