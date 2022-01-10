import React, { useContext } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import AddingFavs from '../components/AddingFavs';
import RemovingFavs from './RemovingFavs';
import { GlobalContext } from '../context/GlobalState';
import ReactStars from 'react-rating-stars-component';




function IndivMovie({ movie, favouriteComponent }) {

    const { addMovieToFavs, removeMovieFromFavs, favourites } = useContext(GlobalContext);

    let storedFavMovie = favourites.find(movieObj => movieObj.id === movie.id);

    const starImplementation = {
        count: 10,
        size: 24,
        edit: false,
        value: movie.vote_average
    }

    return (
        <div className="movie-card">
            <div className="indiv-movie">
                <div className="movie-poster">
                    {movie.poster_path === null ?
                        <img src={noPoster} alt="No Poster" /> :
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    }
                </div>
                {!storedFavMovie ? (
                    <div className='movie-info'>
                        <h1>{movie.title}</h1>
                        <div className='overview'>
                        <h2>Overview</h2>
                        <h3>{movie.overview}</h3>
                        </div>
                        <div className='released'>
                        <h2>Released</h2>
                        <h3>{movie.release_date}</h3>
                        </div>
                        <h2>Rating</h2>
                        <div className='rating'>
                            <ReactStars {...starImplementation} />
                            <span className='vote-avg'> {movie.vote_average}</span>
                        </div>
                        <div className="overlay d-flex align-items-center justify-content-bottom" onClick={() => addMovieToFavs(movie)} >
                            <AddingFavs />
                        </div>
                    </div>
                )
                    :
                    (
                        <div className='movie-info'>
                            <h1>{movie.title}</h1>
                            <div className='overview'>
                                <h2>Overview</h2>
                                <h3>{movie.overview}</h3>
                            </div>
                            <div className='released'>
                                <h2>Released</h2>
                                <h3>{movie.release_date}</h3>
                            </div>
                            <h2>Rating</h2>
                            <div className='rating'>

                                <ReactStars {...starImplementation} />
                                <span className='vote-avg'> {movie.vote_average}</span>
                            </div>
                            <div className="overlay d-flex align-items-center justify-content-center" onClick={() => removeMovieFromFavs(movie)}>
                                <RemovingFavs />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default IndivMovie
