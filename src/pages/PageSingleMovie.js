import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IndivMovie from '../components/IndivMovie';
//import Movies from '../components/Movies';
import MovieCard from "../components/MovieCard";
import AddingFavs from '../components/AddingFavs';
import API_KEY from '../globals/globals';


function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);
    const [favourites, setFavourites] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            console.log(data)
            setMovieData(data);
        }
        fetchMovies();
    }, [id])

    const addFavMovie = (movie) => {
        console.log(movie)
        console.log("testing this")
        const newFavList = [...favourites, movie]
        setFavourites(newFavList)
    }

    return (
        <section className="single-movie-page">
           {/* { movieData !== null &&  <h2>{movieData.title}</h2> } */}
           {movieData !== null && <IndivMovie movie={movieData} key={movieData.id} favouriteComponent={AddingFavs} handlingFavsClick={addFavMovie} selectedFavs={favourites}/>}
        </section>
    )
}

export default PageSingleMovie
