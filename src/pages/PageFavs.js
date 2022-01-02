import { useState, useEffect, useContext } from 'react';
import AddingFavs from '../components/AddingFavs';
import IndivMovie from '../components/IndivMovie';
import MovieCard from '../components/MovieCard';
import PageSingleMovie from './PageSingleMovie';
import FavouritesCard from '../components/FavouritesCard';
import { GlobalContext } from '../context/GlobalState';

function PageFavs() {

    const { favourites } = useContext(GlobalContext);

    return (
        <section className="favs-page">
            <h2>Page Favs</h2>
            {favourites.length === 0 && <h2>Sorry you have no favourited movies. Return to the home page to add a favourite movie</h2>} 
            <div className="movies-container">
                {favourites.length > 0 && (favourites.map((favObj, i) => <FavouritesCard movie={favObj} key={favObj.id} />))}
            </div>
        </section>
    )
}

export default PageFavs