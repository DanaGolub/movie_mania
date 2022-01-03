import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import AddingFavs from '../components/AddingFavs';
import RemovingFavs from './RemovingFavs';

import { GlobalContext } from '../context/GlobalState';



function IndivMovie({ movie, favouriteComponent }) {

    // const FavComponent = favouriteComponent;
    const { addMovieToFavs, removeMovieFromFavs, favourites } = useContext(GlobalContext);

    let storedFavMovie = favourites.find(movieObj => movieObj.id === movie.id);
    // let disableButton = storedFavMovie ? true : false;


    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>

            {!storedFavMovie ? (
                <div onClick={() => addMovieToFavs(movie)} className='movie-info'>
                    <h3>{movie.title}</h3>
                    <h3>{movie.release_date}</h3>
                    <h3>{movie.vote_average}</h3>
                    <h3>{movie.overview}</h3>
                    <div className="overlay d-flex align-items-center justify-content">

                    </div>
                    <AddingFavs />
                </div>
            )
                :
                (
                    <div onClick={() => removeMovieFromFavs(movie)} className='movie-info'>
                        <h3>{movie.title}</h3>
                        <h3>{movie.release_date}</h3>
                        <h3>{movie.vote_average}</h3>
                        <h3>{movie.overview}</h3>
                        <RemovingFavs />
                    </div>
                )
            }
        </div>
    )
}


export default IndivMovie
