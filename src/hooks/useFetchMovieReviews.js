import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../api/api";

export const useFetchMovieReviews = () => {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{

        const abortCtrl = new AbortController();

        const fetchData = async () => {
            try{
                setIsLoading(true);

                const reviews = await getMovieReviews(id, abortCtrl);
                if (reviews.length === 0) { 
                        setError("We don't have any reviews for this movie");
                }
                setList(reviews);
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