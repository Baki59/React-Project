import './App.css';
import React, {useState,useEffect} from 'react';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieFrom from './components/movie-form';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/",{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 6a61b88bf2cb386261163134cc833c52514e5efc'

      }
    }).then( resp => resp.json())
    .then( resp => setMovies(resp))
    .catch( error => console.log(error))
  },[])

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updatedMovie = movie => {
    const newMovies = movies.map(mov => {
      if (mov.id === movie.id){
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }

  const newMovie = () =>{
    setEditedMovie({title:'', description: ''});
    setSelectedMovie(null);
  }

  const movieCreated = movie =>{
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }

  const removeClicked = movie => {
    const newMovies = movies.filter( mov => mov.id !== movie.id)
    setMovies(newMovies);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className='layout'>
          <div>
            <MovieList 
              movies={movies} 
              movieClicked={loadMovie} 
              editClicked={editClicked}
              removeClicked={removeClicked}
            />
            <button onClick={newMovie}>New Movie</button>
          </div>
          
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          {editedMovie ? 
          <MovieFrom movie={editedMovie} updatedMovie={updatedMovie} movieCreated={movieCreated}/> : null }
          

        </div>
    </div>
  );
}

export default App;
