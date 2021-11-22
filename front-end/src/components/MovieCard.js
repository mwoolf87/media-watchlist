import React from "react";
import { Card, Button } from 'react-bootstrap';

export default function MovieCard(props) {
    const { Title, Year, Poster, imdbId } = props.movie;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title>{Year}</Card.Title>          
          </Card.Body>
      </Card>
    </div>
  );
}
