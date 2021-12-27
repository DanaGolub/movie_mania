import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import API_KEY from '../globals/globals';

function PageHome() {

    const [moviesData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const data = await res.json();
            const first12Movies = data.results.splice(0, 12);
            //console.log(first12Movies);
            setMovieData(first12Movies);
        }
        fetchMovies();
    }, [])

    return (
        <section className="home-page">
            {moviesData !== null && <Movies moviesData={moviesData} />}
            {/* or */}
            {/* { movieData !== null ? <Movies/> : <p>Fetching Movies...</p>} */}
        </section>
    )
}

export default PageHome