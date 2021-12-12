import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/actions/movieData-actions";
import { setModalData } from "../redux/actions/detailedMovieData-actions";
import MovieModal from "./MovieModal";

export default function MovieCard(props) {
  // Function to trigger modal to show

  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  /* 
  function showModal() {

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
            onClick={() => setModalShow(true)}
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
      {modalShow && <Modal />}

    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
