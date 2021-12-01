import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setMovieData } from '../redux/actions/movieData-actions';

export default function MovieCard(props) {
    // defining dispatch to use on line 22
    const dispatch = useDispatch();
    //deconstructing props here
    const { Title, Year, Poster } = props.movie
    return (
        <div className="movie-card-container">
            {/* copied this card syntax from react-bootstrap */}
            <Card className="movie-card" style={{ width: '18rem' }}>
                {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    {/* calling the title and year of the movie, within this react-bootstrap card */}
                    <Card.Title>{Title}</Card.Title>
                    <Card.Title>{Year}</Card.Title>
                    {/* calling dispatch to set the state of our watchlist data in reducer */}
                    <Button onClick={() => dispatch(setMovieData(props.movie))}>Add to Watchlist</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
