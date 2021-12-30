import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function FavouritesCard({ movie }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date}</h3>
                <h3>{movie.vote_average}</h3>
                <Link to={`movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default FavouritesCard