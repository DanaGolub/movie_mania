import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import AddingFavs from '../components/AddingFavs';
import { GlobalContext } from '../context/GlobalState';



function IndivMovie({ movie, favouriteComponent, handlingFavsClick }) {

    const FavComponent = favouriteComponent;
    const { addMovieToFavs } = useContext(GlobalContext); 

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            {/* <div onClick={() => handlingFavsClick(movie)} className='movie-info'> */}
            <div onClick={() => addMovieToFavs(movie)} className='movie-info'>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date}</h3>
                <h3>{movie.vote_average}</h3>
                <h3>{movie.overview}</h3>
                <FavComponent />
            </div>
        </div>
    )
}

export default IndivMovie
