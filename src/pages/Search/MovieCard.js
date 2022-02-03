import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Image, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import imdblogo from "../../components/shared/images/imdb.png";
import csmlogo from "../../components/shared/images/csm.png";
import justwatch from "../../components/shared/images/justwatch-square.png";
import "./MovieCard.css";
import thumbsup from "./images/thumbsup.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { imageNA } from "../../components/shared/images/imageNA.png"

export default function MovieCard(props) {
  // Todo: Guard against 404 errors on url links on modal
  const {
    Director,
    Genre,
    imdbRating,
    imdbID,
    Language,
    Metascore,
    Plot,
    Poster,
    // eslint-disable-next-line
    Released,
    Rated,
    Runtime,
    Title,
    Year
  } = props.movie;

  const [modalShow, setModalShow] = useState(false);

  const getMovie = imdbId => {
    const local = window.localStorage;
    let userID = local.getItem("userID");
    // console.log(userID);
    axios
      .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=39132f6b`)
      .then(res => {
        axios.post(
          `https://new-mwl-backend.herokuapp.com/watchlist/${userID}`,
          res.data
        );
      });
    toast.success('Movie Added to WatchList!');
  };

  const handleClose = () => setModalShow(false);

  // defining dispatch to use on line 22
  // eslint-disable-next-line
  const dispatch = useDispatch();
  //deconstructing props here

  /* Define custom urls */
  const parentsGuideURL =
    "https://www.imdb.com/title/" + imdbID + "/parentalguide";

  // Dash title (i.e. Lord of the Rings: Return -> Lord-of-the-Rings-Return)
  const dashedTitle = Title.replace(/:+/g, "").replace(/\s+/g, "-");

  const commonSenseURL =
    "https://www.commonsensemedia.org/movie-reviews/" + dashedTitle;

  const justWatchURL = "https://www.justwatch.com/us/movie/" + dashedTitle;

  return (
    <div className="movie-card-container">
      {/* copied this card syntax from react-bootstrap */}
      <Card className="movie-card" style={{ width: "18rem" }}>
        {/* using the the Poster variable defined from our prop deconstruction to reference a src="" for the image */}
        <Card.Img variant="top" src={Poster === "N/A" ? imageNA : Poster} />
        <Card.Body>
          {/* calling the title and year of the movie, within this react-bootstrap card */}
          <Card.Title>{Title}</Card.Title>
          <Card.Title>{Year}</Card.Title>
          <Card.Title>Rating: {Rated}</Card.Title>

          {/* calling dispatch to set the state of our watchlist data in reducer */}
          {/* Parents guide from IMDB */}
          <Button
            className="button-19 m-2"
            onClick={() => setModalShow(true)}
            variant="warning"
          >
            More Info
          </Button>
          {/*           
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>*/}

          <Button
            fontSize="30px"
            className="button-19 m-2"
            onClick={() => getMovie(imdbID)}
          >
            <Image className="thumbsup" src={thumbsup}></Image>
          </Button>
        </Card.Body>
      </Card>
      {modalShow && <Modal />}

      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header style={{display: "flex", justifyContent : "center", alignItem : "center"}}closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Row>
        <ListGroup.Item>Director: {Director}</ListGroup.Item>
          <ListGroup.Item>Runtime: {Runtime}</ListGroup.Item>
          <ListGroup.Item>Year: {Year}</ListGroup.Item>
          <ListGroup.Item>Language: {Language}</ListGroup.Item>
          <ListGroup.Item>Rating: {Rated}</ListGroup.Item>
          <ListGroup.Item>Metascore: {Metascore}</ListGroup.Item>
          <ListGroup.Item>imdbRating: {imdbRating}</ListGroup.Item>
          <ListGroup.Item>Genre: {Genre}</ListGroup.Item>
          <ListGroup.Item>{Plot}</ListGroup.Item>
          <Col>
            <a className="movieLink" href={parentsGuideURL} target="_blank" rel="noreferrer noopener">
              <Image className="imdblogo" src={imdblogo} alt="imdb_logo" />
              <div>Parents Guide</div>
            </a>
          </Col>
          <Col>
            <a className="movieLink" href={commonSenseURL} target="_blank" rel="noreferrer noopener">
              <Image src={csmlogo} alt="csm_logo" />
              <div>Common Sense Media</div>
            </a>
          </Col>
          <Col>
            <a className="movieLink" href={justWatchURL} target="_blank" rel="noreferrer noopener">
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
          <Button
            className="button-19 m-2"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            fontSize="30px"
            className="button-19 m-2"
            onClick={() => getMovie(imdbID)}
          >
            <Image className="thumbsup" src={thumbsup}></Image>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
