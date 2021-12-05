import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/actions/movieData-actions";

export default function MovieCard(props) {
  // defining dispatch to use on line 22
  const dispatch = useDispatch();
  //deconstructing props here
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const CAT_404 = "https://http.cat/404";

  const { title, poster_path, release_date } = props.data;

  return (
    <div className="movie-card-container">
      {/* copied this card syntax from react-bootstrap */}
      <Card className="movie-card" style={{ width: "18rem" }}>
        {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
        <Card.Img
          variant="top"
          src={poster_path === null ? CAT_404 : IMG_API + poster_path}
        />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>{title}</Card.Title>
          <Card.Title>{release_date}</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          <Button id="moreinfobutton" variant="warning">
            <a href="/moreinfo">More Info</a>
          </Button>
          <Button onClick={() => dispatch(setApiData(props.data))}>
            Add to Watchlist
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
