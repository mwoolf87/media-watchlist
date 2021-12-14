import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function Watchlist() {
  // grabbing state from redux and assigning it to a variable
  const watchlistData = useSelector(state => state.apiData);

  return (
    <div>
      <h1>Watchlist</h1>
      <div className="movie-container">
        <Row>
          {/* mapping through movieData that is coming from the reducer */}
          {watchlistData &&
            watchlistData.map((data, index) => {
              return (
                <Col
                  // adding a key with a unique value to avoid getting a warning in our console
                  key={index}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className="mb-6"
                >
                  {/* returning the card component and passing through the movie object */}
                  <MovieCard data={data} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}
