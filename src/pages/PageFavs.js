import { useState, useEffect } from 'react';
import AddingFavs from '../components/AddingFavs';
import IndivMovie from '../components/IndivMovie';
import PageSingleMovie from './PageSingleMovie';

function PageFavs(selectedFavs) {

    //const [favourites, setFavourites] = useState([]);
    const favs = selectedFavs
    console.log(favs)

    return (
        <section className="favs-page">
            <h2>Page Favs</h2>
            
            {/* <IndivMovie /> */}
        </section>
    )
}

export default PageFavs