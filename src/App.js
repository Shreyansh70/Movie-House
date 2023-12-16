import {useEffect, useState} from 'react'
// 53d573c9
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
const API_URL = "http://www.omdbapi.com/?apikey=53d573c9"

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const App = () => {
    const [movieList , setMovieList] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        typeof(data.Search) !== 'undefined' ? setMovieList(data.Search) : setMovieList([]);
    }

    

    useEffect(() => {
        console.log(`Tyoe of movieList : ${typeof(movieList)}`);
        searchMovies(search)
    }, [search])
    return (
        <>
            <div className='app'>
                <h1>Movie House</h1>

            <div className='search'>
                <input 
                    placeholder='Search For Movies...'
                    value={search}
                    onChange = {(e) => setSearch(e.target.value)}
                />
                <img 
                    src = {SearchIcon}
                    alt = 'Search'
                />
            </div>

            <div className = 'container'>
                {movieList.length>0 ? movieList.map(movies => <MovieCard movie={movies} />) : <h1>No Movies to Display!!!</h1>}
            </div>
            </div>
        </>
    )
}

export default App;