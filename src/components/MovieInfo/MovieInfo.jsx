export const MovieInfo = ({movie}) => {

    const {id, title='No title', poster_path, release_year, overview='There ara no overview', genres=[], vote_average = 0} = movie;

    return  <>
                <p>{title}</p>
                <img src={poster_path} alt={title} />
                <p>{release_year}</p>
                <p>{overview}</p>
                <p>{genres.map(item=> item.name).join(", ")}</p>
                <p>{vote_average}</p>
            </>
}