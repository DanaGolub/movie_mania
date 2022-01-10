import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { GlobalContext } from '../context/GlobalState';
import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';



function FavouritesCard({ movie }) {

    const starImplementation = {
        count: 10,
        size: 24,
        edit: false,
        value: movie.vote_average
    }

    const { addMovieToFavs, removeMovieFromFavs, favourites } = useContext(GlobalContext);
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className='movie-info'>
                <div className="btn-remove-favs" onClick={() => removeMovieFromFavs(movie)}>
                    {/* heart shape icon*/}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="17"
                        fill="red"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
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
        </div>
    )
}

export default FavouritesCard
