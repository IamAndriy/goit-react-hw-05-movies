import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "api/movie-api";

export const useFetchMoviesByQuery = () => {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        
        const abortCtrl = new AbortController();
        const query = searchParams.get("query");

        const fetchData = async () => {
            try{
                setIsLoading(true);
                const data = await getMoviesByQuery(query, abortCtrl);
                if (query && data.length === 0){
                    setError(`We didn't find any movie for your query "${query}"`);
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
                    setError(err.message);
                }
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();

        return () => {
            abortCtrl.abort();
        }

    }, [searchParams]);

    const onChangeParams = (query) => {
        setSearchParams({query});
    }

    return {list, isLoading, error, onChangeParams};
}