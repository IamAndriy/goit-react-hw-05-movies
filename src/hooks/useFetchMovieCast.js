import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/api";

export const useFetchMovieCast = () => {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{

        const abortCtrl = new AbortController();

        const fetchData = async () => {
            try{
                setIsLoading(true);

                const data = await getMovieCast(id, abortCtrl);
                if (data.length === 0) { 
                    setError("We don't have any cast list for this movie");
                }
                setList(data);
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

    }, [id]);

    return {list, isLoading, error};
}