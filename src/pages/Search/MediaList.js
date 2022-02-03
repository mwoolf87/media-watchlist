import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import MovieCard from "./MovieCard";
import "./Search.css"
// eslint-disable-next-line
const local = window.localStorage;

export default function MediaList() {
  const [apiData, setApiData] = useState([]); //initializing state to store movie data from our api call in an array
  const [inputValue, setInputValue] = useState(""); //initializing state to store user input value

  const getMovies = async e => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${inputValue}&apikey=39132f6b&type=movie`
      );
      if (response.data.Search) {
        const moviesArray = response.data.Search.map(async movie => {
          const detailedRes = await axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=39132f6b&type=movie`
          );

          return Promise.resolve(detailedRes.data);
        });

        const detailedMovies = await Promise.all(moviesArray);
        return detailedMovies;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
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
  const getDefaultMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=Toy+Story&apikey=39132f6b&type=movie`
      );
      const moviesArray = response.data.Search.map(async movie => {
        const detailedRes = await axios.get(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=39132f6b`
        );

        return Promise.resolve(detailedRes.data);
      });

      const detailedMovies = await Promise.all(moviesArray);
      setApiData(detailedMovies);
      return detailedMovies;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    getDefaultMovies();
  }, []);

  return (
    <div>
        <Form className = "searchBar" onSubmit={handleSubmit}>
          {/* text input that has an event handler of onChange that runs the handleChange function defined on line 18 */}
          <input value={inputValue} onChange={handleChange} type="text" />

          <Button className="button-19 m-2" type="submit">Search</Button>
        </Form>
      <div className="movie-container">
        {apiData.length === 0 ? (
          <p className="error-message">Invalid Search Please Try Again</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}
