import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import AddingFavs from '../components/AddingFavs';

function IndivMovie({ movie, favouriteComponent, handlingFavsClick }) {

    const FavComponent = favouriteComponent;
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div onClick={() => handlingFavsClick(movie)} className='movie-info'>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date}</h3>
                <h3>{movie.vote_average}</h3>
                <h3>{movie.overview}</h3>
                {/* <Link to={`movie/${movie.id}`}>More Info</Link> */}
                {/* <button>Add to your Favourites</button> */}
                {/* <AddingFavs /> */}
                <FavComponent />
            </div>
        </div>
    )
}

export default IndivMovie
