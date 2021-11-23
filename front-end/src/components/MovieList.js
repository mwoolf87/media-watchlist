import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import MovieCard from './MovieCard'

export default function MovieList() {
    const [movieData, setMovieData] = useState([]); //initializing state to store movie data from our api call in an array
    const [inputValue, setInputValue] = useState("") //initializing state to store user input value


    //creaing a function that makes an api call, we pass through event as a parameter to prevent the page reloading on the form submission
    const getMovies = (event) => {
        //preventing page from reloading 
        event.preventDefault()
        //making an axios api call to this movie api. We provide a string literal on the search query. The variable getting passed through 
        //the url is our User's input we store in state.
        axios.get(`http://www.omdbapi.com/?s=${inputValue}&apikey=697d4771`)
            .then((res) => res.data)
            .then((data) => {
                //setting the inputValue back to an empty string to clear the search bar when you press the search button
                setInputValue("")
                //setting the movie data we get back from the response of the api to our movieData state
                return setMovieData(data.Search)
            });
    }
    
    // function created to set the state of inputValue to the value of the input
    const handleChange = (event) => {
        console.log("component rerender")
        setInputValue(event.target.value)
    }

    // getting default movies
    const getDefaultMovies = () => {
                axios.get(`http://www.omdbapi.com/?s=Avengers&apikey=697d4771`)
                    .then((res) => res.data)
                    .then((data) => {
                        console.log("api called")
                        return setMovieData(data.Search)
                    });
    };

    
    useEffect(() => {
        getDefaultMovies()
    },[])


    return (
        <div>
            <h1>RecommendMe</h1>
            {/* Created form to handle user input and search button */}
            <form onSubmit={getMovies}>
                {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
                <input value={inputValue} onChange={handleChange} type="text" />
                {/* submit button to submit the form */}
                <button type="submit">Search</button>
            </form>

            <div className="movie-container">
                <Row >
                {movieData && movieData.map((movie, index) => {
                    return (
                        <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={4}
                        className="mb-6"
                    >
                        <MovieCard movie={movie} />
                    </Col>
                    )
                })}
                </Row>
            </div>
        </div>
    )
}
