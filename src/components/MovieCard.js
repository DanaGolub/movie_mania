import { Link } from 'react-router-dom';
//import noPoster from '../images/no-movie-poster.jpg';
//import gkPoster from '../images/godzilla-vs-kong-demo-poster.jpg'
import noPoster from '../images/no-movie-poster.jpg';
import ReactStars from 'react-rating-stars-component';

function MovieCard({ movie }) {

    const starImplementation = {
        count: 10,
        size: 24,
        edit: false,
        value: movie.vote_average
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className='movie-info'>
                <h1>{movie.title}</h1>
                <div className='release-date'>
                <h2>Release Date</h2>
                <h3>{movie.release_date}</h3>
                </div>
                <h2>Rating</h2>
                <div className='rating'>
                    <ReactStars {...starImplementation} />
                    <span className='vote-avg'> {movie.vote_average}</span>
                </div>
                <div className='overview'>
                <h2>Overview</h2>
                <h3>{movie.overview}</h3>
                </div>
                <Link to={`movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard
