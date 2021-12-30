import {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import IndivMovie from '../components/IndivMovie';
//import Movies from '../components/Movies';
import MovieCard from "../components/MovieCard";
import AddingFavs from '../components/AddingFavs';
import API_KEY from '../globals/globals';
import Movies from '../components/Movies';
import RemovingFavs from '../components/RemovingFavs';
// import { GlobalContext } from '../context/GlobalState';
import { GlobalContext } from '../context/GlobalState';


function PageSingleMovie() {
    const { addMovieToFavs, removeMovieFromFavs, favourites } = useContext(GlobalContext); 

    const [movieData, setMovieData] = useState(null);
    //const [favourites, setFavourites] = useState([null]);
    const [storedFavMovie, setStoredFavMovie] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            //console.log(data)

            setStoredFavMovie(favourites.find(movieObj => movieObj.id == data.id));

            //console.log(storedFavMovie)
            setMovieData(data);
        }
        fetchMovies();
    }, [id])


    //favourites.map( mov => console.log(mov.id))

    //let storedFavMovie = favourites.find(movieObj => movieObj.id == movieData.id);

    // const addFavMovie = (movie) => {
    //     const newFavList = [...favourites, movie]
    //     setFavourites(newFavList)
    // }

    return (
        <div>
        <section className="single-movie-page">
           {/* { movieData !== null &&  <h2>{movieData.title}</h2> } */}
           {/* {movieData !== null && <IndivMovie movie={movieData} key={movieData.id} favouriteComponent={AddingFavs} handlingFavsClick={addFavMovie}/>} */}
           {movieData !== null && 
           <IndivMovie 
           movie={movieData} 
           key={movieData.id} 
           handlingFavsClick={!storedFavMovie ? {addMovieToFavs} : {removeMovieFromFavs} } 
           favouriteComponent={!storedFavMovie ? AddingFavs : RemovingFavs} 
           />
           }
        </section>
        </div>
    )
}

export default PageSingleMovie
// selectedFavs={favourites}