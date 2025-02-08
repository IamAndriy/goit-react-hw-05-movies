import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails} from "api/api";

export const useFetchMovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{
        
        const abortCtrl = new AbortController();
        
        const fetchData = async () => {
            try{
                setIsLoading(true);
                
                const data = await getMovieDetails(id, abortCtrl);
                setMovieDetails(data);
            }catch(err){
                if (!abortCtrl.signal?.aborted){
                    err.status === 404 
                        ? setError("Movie not found!")
                        : setError(err.message);

                }
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();

        return () => {
            abortCtrl.abort();
        }

    }, [id]);

    return { movieDetails, isLoading, error };
}