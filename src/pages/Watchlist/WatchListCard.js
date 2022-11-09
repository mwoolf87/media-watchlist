import React, { useState } from "react";
import { Card, Button, Col, Row, Modal, Image } from "react-bootstrap";
import imdblogo from "../../components/shared/images/imdb.png";
import csmlogo from "../../components/shared/images/csm.png";
import justwatch from "../../components/shared/images/justwatch-square.png";
import axios from "axios";
import "../Search/MovieCard.css";
import { toast } from 'react-toastify';
import { imageNA } from "../../components/shared/images/imageNA.png"

export default function WatchListCard({ movie, setWatchListData }) {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  // eslint-disable-next-line
  const handleShow = () => setModalShow(true);

  const parentsGuideURL =
    "https://www.imdb.com/title/" + movie.imdbID + "/parentalguide";
  // console.log(parentsGuideURL);
  // Dash title (i.e. Lord of the Rings: Return -> Lord-of-the-Rings-Return)
  const dashedTitle = movie.title.replace(/:+/g, "").replace(/\s+/g, "-");

  const commonSenseURL =
    "https://www.commonsensemedia.org/movie-reviews/" + dashedTitle;

  const justWatchURL = "https://www.justwatch.com/us/movie/" + dashedTitle;

  const local = window.localStorage;
  let userID = local.getItem("userID");

  const deleteMovie = async imdbID => {
    await axios.delete(
      `https://new-mwl-backend.onrender.com//watchlist/${imdbID}`,
      {
        data: { UserId: userID }
      }
    );
    axios
      .get(`https://new-mwl-backend.onrender.com//watchlist/${userID}`)
      .then(res => setWatchListData(res.data));
      toast.success('Movie Deleted!');
  };

  return (
    <div>
      {movie && (
        <div className="movie-card-container">
          <Card className="movie-card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={movie.poster === "N/A" ? imageNA : movie.poster}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Title>{movie.released}</Card.Title>
              <Card.Title>{movie.rated}</Card.Title>
              <Button className="button-19 m-2" onClick={() => setModalShow(true)} variant="warning">
                More Info
              </Button>
              <Button
                className="button-19 m-2"
                onClick={() => deleteMovie(movie.imdbID)}
                variant="danger"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
          {/* Modal Begins */}
          {modalShow && <Modal />}
          <Modal show={modalShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Row>
              <Col>Director: {movie.director}</Col>
              <Col>Runtime: {movie.runTime}</Col>
              <Col>Year: {movie.year}</Col>
              <Col>Language: {movie.language}</Col>
              <Col>Rating: {movie.rated}</Col>
              <Col>Metascore: {movie.metaScore}</Col>
              <Col>imdbRating: {movie.imdbRating}</Col>
            </Row>
            <Row>
              <Col>Genre: {movie.genre}</Col>
            </Row>
            <Modal.Body>{movie.plot}</Modal.Body>
            <Row>
              <Col>
                <a
                  href={parentsGuideURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image className="imdblogo" src={imdblogo} alt="imdb_logo" />
                  <div>Parents Guide</div>
                </a>
              </Col>
              <Col>
                <a
                  href={commonSenseURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image src={csmlogo} alt="csm_logo" />
                  <div>Common Sense Media</div>
                </a>
              </Col>
              <Col>
                <a
                  href={justWatchURL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    className="imdblogo"
                    src={justwatch}
                    alt="just_watch_logo"
                  />
                  <div>Stream</div>
                </a>
              </Col>
            </Row>
            <Modal.Footer>
              <Button className="button-19 m-2" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
}
