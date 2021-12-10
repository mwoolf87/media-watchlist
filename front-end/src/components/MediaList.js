import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MovieCard from "./MovieCard";

export default function MediaList() {
  const [apiData, setApiData] = useState([]); //initializing state to store movie data from our api call in an array
  const [inputValue, setInputValue] = useState(""); //initializing state to store user input value

  // const [searchCriteria, setSearchCriteria] = useState("");

  //creating a function that makes an api call, we pass through event as a parameter to prevent the page reloading on the form submission
  const getMovies = e => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${inputValue}&apikey=39132f6b`)
      .then(res => res.data)
      .then(data => {
        let dataLength = data.Search.length;
        let detailedMovieApi = [];
        for (let i = 0; i < dataLength; i++) {
          let imdbIDNumber = data.Search[i].imdbID;
          // console.log(imdbIDNumber);
          axios
            .get(`http://www.omdbapi.com/?i=${imdbIDNumber}&apikey=39132f6b`)
            .then(res => res.data)
            .then(data => {
              detailedMovieApi.push(data);
            });
        }
        console.log(detailedMovieApi);
        setApiData(detailedMovieApi);
      });
  };
  //setting the inputValue back to an empty string to clear the search bar when you press the search button
  // setInputValue("");
  //setting the movie data we get back from the response of the api to our movieData state
  // return setApiData(data.Search);

  // const handleSearchChange = e => {
  //   setSearchCriteria(e.target.value);
  // };
  // ----------- Function to search for book data
  // const getBooks = () => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyCnojgLZsM_gkX8d83JS_bqbCB7y_qRREQ`
  //     )
  //     .then(res => res.data)
  //     .then(data => {
  //       setInputValue("");
  //       // console.log(data.items);
  //       return setApiData(data.items);
  //     });
  // };
  // ------ Function to call Media types dependant on search criteria
  // const searchApi = e => {
  //   e.preventDefault();
  //   if (searchCriteria === "movies") {
  //     getMovies();
  //     // } else if (searchCriteria === "books") {
  //     //   getBooks();
  //   }
  // };

  // function created to set the state of inputValue to the value of the input
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  // getting default movies
  const getDefaultMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s="Toy+Story"&apikey=39132f6b`)
      .then(res => res.data)
      .then(data => {
        return setApiData(data.Search);
      });
  };

  useEffect(() => {
    getDefaultMovies();
  }, []);

  return (
    <div>
      <h1>RecommendMe</h1>
      {/* Created form to handle user input and search button */}
      <Form onSubmit={getMovies}>
        {/* <form onSubmit={getBooks}> */}
        {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
        <input value={inputValue} onChange={handleChange} type="text" />
        {/* submit button to submit the form */}

        <Button type="submit">Search</Button>

        {/* SELECT SEARCH TYPE IF WE WANT TO INTRODUCE OTHER MEDIUMS */}
        {/* <select id="media" name="media" onChange={e => handleSearchChange(e)}>
          <option value="">Select Books, Movie and More</option>
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="tvshows">TV Shows</option>
          <option value="secondmovieAPI">Second Movie API</option>
        </select> */}
      </Form>

      <div className="movie-container">
        <Row>
          {apiData.map((movie, id) => {
            return (
              <Col
                key={id}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className="mb-6"
              >
                <MovieCard movie={movie} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
