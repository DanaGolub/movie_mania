import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import RemovingFavs from './RemovingFavs';
import { GlobalContext } from '../context/GlobalState';
import React, { useState, useContext } from 'react';



function FavouritesCard({ movie }) {
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

                <h3>{movie.title}</h3>
                <h3>{movie.release_date}</h3>
                <h3>{movie.vote_average}</h3>
                <Link to={`movie/${movie.id}`}>More Info</Link>

            </div>
        </div>
    )
}

export default FavouritesCard
