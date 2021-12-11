import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/actions/movieData-actions";
import { setModalData } from "../redux/actions/detailedMovieData-actions";

export default function MovieCard(props) {
  // Function to trigger modal to show

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  /* 
  function showModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <detailedMovieModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  } 
  */

  /*
  <Button
            onClick={() => dispatch(setModalData(props.movie))}
            variant="warning"
          >*/

  // defining dispatch to use on line 22
  const dispatch = useDispatch();
  //deconstructing props here

  const CAT_404 = "https://http.cat/404";

  const { Title, Year, Poster, Rated } = props.movie;

  return (
    <div className="movie-card-container">
      {/* copied this card syntax from react-bootstrap */}
      <Card className="movie-card" style={{ width: "18rem" }}>
        {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
        <Card.Img variant="top" src={Poster === "N/A" ? CAT_404 : Poster} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>{Title}</Card.Title>
          <Card.Title>{Year}</Card.Title>
          <Card.Title>Rating: {Rated}</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          {/* Parents guide from IMDB */}
          <Button
            onClick={() => dispatch(setModalData(props.movie))}
            variant="warning"
          >
            More Info
          </Button>
          {/*           
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>*/}

          <Button onClick={() => dispatch(setApiData(props.movie))}>
            Add to Watchlist
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
