import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import API_KEY from '../globals/globals';

function PageHome() {

    const [moviesData, setMovieData] = useState(null);

    var sortMoviesBy = ["Popular", "Top Rated", "Now Playing", "Upcoming"]
    
    function choosingSortMoviesBy(e) {
        e.preventDefault();
        let selectedOption = e.target.elements.movies.value

        console.log(selectedOption)
        // if (selectedOption === "Popular") {
        //     console.log("Popular")
        // }
        // else if (selectedOption === "Top Rated") {
        //     console.log("top movies")
        // }
        // else if (selectedOption === "Now Playing") {
        //     console.log("Now Playing")
        // }
        // else if (selectedOption === "Upcoming") {
        //     console.log("Upcoming")
        // }
    }



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
            <section>
                <form action="/" onSubmit={choosingSortMoviesBy}>
                    <label htmlFor="movies">Products: </label>
                    <select name="movies" id="movies">
                        {sortMoviesBy.map((movie, i) => <option key={i}>{movie}</option>)}
                    </select>
                    <br />
                    <button type="submit">Choose</button>
                </form>
            </section>

            {moviesData !== null && <Movies moviesData={moviesData} />}
            {/* or */}
            {/* { movieData !== null ? <Movies/> : <p>Fetching Movies...</p>} */}
        </section>
    )
}

export default PageHome