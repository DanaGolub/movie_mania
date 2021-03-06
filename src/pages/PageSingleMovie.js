import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IndivMovie from '../components/IndivMovie';
import API_KEY from '../globals/globals';



function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            setMovieData(data);
        }
        fetchMovies();
    }, [id])


    return (
        <div>
            <section className="single-movie-page">
                {movieData !== null &&
                    <IndivMovie
                        movie={movieData}
                        key={movieData.id}
                    />
                }
            </section>
        </div>
    )
}

export default PageSingleMovie
