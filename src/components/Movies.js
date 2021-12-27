import MovieCard from "./MovieCard";

function Movies({ moviesData }) {
    return (
        <div className="movies-container">
            {moviesData.map((moviesObj, i) => <MovieCard movie={moviesObj} key={moviesObj.id} />)}
        </div>
    )
}

export default Movies