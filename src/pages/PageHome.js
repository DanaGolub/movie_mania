import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import API_KEY from '../globals/globals';

function PageHome() {

    const [moviesData, setMovieData] = useState(null);
    const [chosenMovCategory, setChosenMovCategory] = useState('popular');

    var sortMoviesBy = ["Popular", "Top Rated", "Now Playing", "Upcoming"]
    
    function choosingSortMoviesBy(e) {
        e.preventDefault();
        let selectedOption = e.target.value


        if (selectedOption === "Popular") {
            setChosenMovCategory('popular')
        }
        else if (selectedOption === "Top Rated") {
            setChosenMovCategory('top_rated')
        }
        else if (selectedOption === "Now Playing") {
            setChosenMovCategory('now_playing')
        }
        else if (selectedOption === "Upcoming") {
            setChosenMovCategory('upcoming')
        }
    }


    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${chosenMovCategory}?api_key=${API_KEY}&language=en-US&page=1`);
            const data = await res.json();
            const first12Movies = data.results.splice(0, 12);
            setMovieData(first12Movies);
        }
        fetchMovies();
    }, [chosenMovCategory])

    return (
        <section >
            <section className="categ-form" >
                <form action="/" onClick={choosingSortMoviesBy}>
                    <label htmlFor="movies">Show Me</label>
                    <select className="each-item-drop" name="movies" id="movies">
                        {sortMoviesBy.map((movie, i) => <option key={i}>{movie}</option>)}
                    </select>
                </form>
            </section>
            {moviesData !== null && <Movies moviesData={moviesData} />}
        </section>
    )
}

export default PageHome

