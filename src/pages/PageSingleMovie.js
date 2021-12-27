import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IndivMovie from '../components/IndivMovie';
//import Movies from '../components/Movies';
import MovieCard from "../components/MovieCard";
import API_KEY from '../globals/globals';

function PageAbout() {

    const [movieData, setMovieData] = useState(null);

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

    return (
        <section className="single-movie-page">
           {/* { movieData !== null &&  <h2>{movieData.title}</h2> } */}
           {movieData !== null && <IndivMovie movie={movieData} key={movieData.id} />}
        </section>
    )
}

export default PageAbout
