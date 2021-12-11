import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MovieCard from "./MovieCard";
export default function MediaList() {
  const [apiData, setApiData] = useState([]); //initializing state to store movie data from our api call in an array
  const [inputValue, setInputValue] = useState(""); //initializing state to store user input value

  // const getMovies = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`http://www.omdbapi.com/?s=${inputValue}&apikey=39132f6b`)
  //     .then(res => res.data)
  //     .then(data => {
  //       let dataLength = data.Search.length;
  //       let detailedMovieApi = [];
  //       for (let i = 0; i < dataLength; i++) {
  //         let imdbIDNumber = data.Search[i].imdbID;
  //         axios
  //           .get(`http://www.omdbapi.com/?i=${imdbIDNumber}&apikey=39132f6b`)
  //           .then(res => res.data)
  //           .then(movie => {
  //             debugger;
  //             detailedMovieApi.push(movie);
  //           });
  //       }
  //       setApiData(detailedMovieApi);
  //       console.log(detailedMovieApi);
  //     });
  // };

  // function created to set the state of inputValue to the value of the input
  const getMovies = async e => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${inputValue}&apikey=39132f6b`
      );
      const moviesArray = response.data.Search.map(async movie => {
        const detailedRes = await axios.get(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=39132f6b`
        );

        return Promise.resolve(detailedRes.data);
      });

      const detailedMovies = await Promise.all(moviesArray);
      return detailedMovies;
    } catch (error) {
      return [];
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async event => {
    const movies = await getMovies(event);
    setApiData(movies);
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
      <h1>Media-Watchlist</h1>

      <Form onSubmit={handleSubmit}>
        {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
        <input value={inputValue} onChange={handleChange} type="text" />

        <Button type="submit">Search</Button>
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
