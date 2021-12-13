import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useState } from "react";

export default function FavoritesCard() {
    const [favorites, setFavorites] = useState();
    const dispatch = useDispatch();


  const getFavorites = () => {
      axios
        .get(
        `https://new-mwl-backend.herokuapp.com/favorites/1`)
      .then(res => setFavorites(res.data))
       };

  useEffect(() => {
      getFavorites();
  },[]);

  // <div>
  //       { favorites && <div>
  //       <div>Title: {favorites.title}</div>
  //       <div>Poster: <img src = {favorites.poster} alt = "test" /> </div>
  //       <div>RunTime: {favorites.runTime}</div>
  //       <div>Year: {favorites.year}</div>
  //       <div>Director: {favorites.director}</div>
  //       <div>Rated: {favorites.rated}</div>
  //       <div>imdbRating: {favorites.imdbRating}</div>

  // </div>

  return (
    <div>
    { favorites &&
    <div className="movie-card-container">
    {/* copied this card syntax from react-bootstrap */}
    <Card className="movie-card" style={{ width: "18rem" }}>
      {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
      <Card.Img
        variant="top"
        src={favorites.poster}
      />
      <Card.Body>
        {/* calling the title and year of the movie, within this react-bootstrap card */}
        <Card.Title>{favorites.title}</Card.Title>
        <Card.Title>{favorites.released}</Card.Title>

        {/* calling dispatch to set the state of our watchlist data in reducer */}
        <Button id="moreinfobutton" variant="warning">
          <a href="/moreinfo">More Info</a>
        </Button>
      </Card.Body>
    </Card>
  </div> }
</div>
  );
}