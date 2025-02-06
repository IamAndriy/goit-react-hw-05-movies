import { useState } from "react";
import { toast } from "react-toastify";

export const SearchForm = ({onSubmit}) => {

    const [query, setQuery] = useState("");

    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (!query.trim()){
            return toast('The query is empty! Please, point what do you want to find!');
        }
        onSubmit(query);
        setQuery("");
    }

    const onChangeQuery = ({target}) => {
        setQuery(target.value);
    }

    return  <form onSubmit={onSubmitHandle}>
                <input 
                    id="searchQuery" 
                    type="text" 
                    value={query} 
                    placeholder="search movie" 
                    onChange={onChangeQuery}
                />
                <button type="submit">Search</button>
            </form>
}