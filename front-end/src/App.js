import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [inputValue, setInputValue] = useState("")

  const getMovies = (event) => {
    event.preventDefault();
    event.preventDefault();
    console.log(movieData)
    axios.get(`http://www.omdbapi.com/?s=${inputValue}&apikey=cf1dfcc6`)
      .then((res) => res.data)
      .then((data) => {
        //call the hook below
        console.log(data);
        return setMovieData(data.Search)
      });
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
  //   getMovies();
  },[])
  

  const yell = (event) => {
    console.log("clicked")
  }

  return (
    <div className="App">
      <h1>RecommendMe</h1>
      <form onSubmit={getMovies}>
        <input onChange={handleChange} type="text"/>
        <button type="submit">Search</button>
      </form>
      { movieData.map((movie, index) => {
        return <MovieCard key={index} movie={movie}/>
      })}
    </div>
  );
}


export default App;