import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MovieCard from "./MovieCard";

export default function MediaList() {
  const [apiData, setApiData] = useState([]); //initializing state to store movie data from our api call in an array
  const [inputValue, setInputValue] = useState(""); //initializing state to store user input value

  const [searchCriteria, setSearchCriteria] = useState("");

  //`https://api.themoviedb.org/3/search/movie?api_key=516a7e6108bcc9da1620d3ae61b05091&language=en-US&query=${inputValue}&page=1&include_adult=false&region=US`

  // Rating:`https://api.themoviedb.org/3/certification/movie/list?api_key=516a7e6108bcc9da1620d3ae61b05091`

  //creating a function that makes an api call, we pass through event as a parameter to prevent the page reloading on the form submission
  const getMovies = () => {
    //preventing page from reloading

    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=516a7e6108bcc9da1620d3ae61b05091&l&language=en-USapend_to_response=providers`
      )
      .then(res => res.data)
      .then(data => {
        //setting the inputValue back to an empty string to clear the search bar when you press the search button
        setInputValue("");
        //setting the movie data we get back from the response of the api to our movieData state
        console.log(data);
        return setApiData(data.results);
      });
  };

  const handleSearchChange = e => {
    setSearchCriteria(e.target.value);
  };

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

  const searchApi = e => {
    e.preventDefault();
    if (searchCriteria === "movies") {
      getMovies();
      // } else if (searchCriteria === "books") {
      //   getBooks();
    }
  };

  // function created to set the state of inputValue to the value of the input
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  // getting default movies
  // const getDefaultMovies = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=516a7e6108bcc9da1620d3ae61b05091&certification_country=US&certification.lte=G,PG&sort_by=popularity.de`
  //     )
  //     .then(res => res.data)
  //     .then(data => {
  //       console.log("api called");
  //       return setApiData(data.results);
  //     });
  // };

  // useEffect(() => {
  //   getDefaultMovies();
  // }, []);

  return (
    <div>
      <h1>RecommendMe</h1>
      {/* Created form to handle user input and search button */}
      <Form onSubmit={searchApi}>
        {/* <form onSubmit={getBooks}> */}
        {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
        <input value={inputValue} onChange={handleChange} type="text" />
        {/* submit button to submit the form */}

        <Button type="submit">Search</Button>
        <select id="media" name="media" onChange={e => handleSearchChange(e)}>
          <option value="">Select Books, Movie and More</option>
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="tvshows">TV Shows</option>
          <option value="secondmovieAPI">Second Movie API</option>
        </select>
      </Form>

      <div className="movie-container">
        <Row>
          {/* {apiData.map((data, id) => {
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
                {searchCriteria === "movies" ? (
                  <MovieCard data={data} />
                ) : (
                  <h1>Hello Book</h1>
                )}
              </Col>
            );
          })} */}
        </Row>
      </div>
    </div>
  );
}
