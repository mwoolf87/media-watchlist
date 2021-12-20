import React, { useState } from "react";
import { Card, Button, Modal, Row, Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/actions/movieData-actions";
// import { setModalData } from "../redux/actions/detailedMovieData-actions";
import imdblogo from "./Images/imdb.png";
import csmlogo from "./Images/csm.png";
import justwatch from "./Images/justwatch-square.png";
import "../CSS/MovieCard.css";
import thumbsup from "./Images/thumbsup.jpg";
import axios from "axios";
import { toast } from "react-toastify";
export default function MovieCard(props) {
  // Function to trigger modal to show

  // Todo: Guard against 404 errors on url links on modal

  const [modalShow, setModalShow] = useState(false);

  const getMovie = imdbId => {
    const local = window.localStorage;
    let userID = local.getItem("userID");
    axios
      .get(`http://www.omdbapi.com/?i=${imdbId}&apikey=39132f6b`)
      .then(res => {
        axios.post(
          `https://new-mwl-backend.herokuapp.com/watchlist/${userID}`,
          res.data,
          {
            credentials: "include"
          }
        );
      });
    toast.success("Movie added to Watch List!");
  };

  // let { Actors } = entireObject;
  // console.log(Actors);
  const handleClose = () => setModalShow(false);
  // const handleShow = () => setModalShow(true);

  // defining dispatch to use on line 22
  const dispatch = useDispatch();
  //deconstructing props here

  // const handleClick = () => {
  //   updateEntireObject();
  // };

  const CAT_404 = "https://http.cat/404";

  const {
    Director,
    Genre,
    imdbRating,
    imdbID,
    Language,
    Metascore,
    Plot,
    Poster,
    Released,
    Rated,
    Runtime,
    Title,
    Year
  } = props.movie;
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
        <Card.Img variant="top" src={Poster === "N/A" ? CAT_404 : Poster} />
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
            onClick={() => console.log(getMovie(imdbID))}
          >
            <Image className="thumbsup" src={thumbsup}></Image>
          </Button>
        </Card.Body>
      </Card>
      {modalShow && <Modal />}

      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Row>
          <Col>Director: {Director}</Col>
          <Col>Runtime: {Runtime}</Col>
          <Col>Year: {Year}</Col>
          <Col>Language: {Language}</Col>
          <Col>Rating: {Rated}</Col>
          <Col>Metascore: {Metascore}</Col>
          <Col>imdbRating: {imdbRating}</Col>
        </Row>
        <Row>
          <Col>Genre: {Genre}</Col>
        </Row>
        <Modal.Body>{Plot}</Modal.Body>
        <Row>
          <Col>
            <a href={parentsGuideURL} target="_blank" rel="noreferrer noopener">
              <Image className="imdblogo" src={imdblogo} alt="imdb_logo" />
              <div>Parents Guide</div>
            </a>
          </Col>
          <Col>
            <a href={commonSenseURL} target="_blank" rel="noreferrer noopener">
              <Image src={csmlogo} alt="csm_logo" />
              <div>Common Sense Media</div>
            </a>
          </Col>
          <Col>
            <a href={justWatchURL} target="_blank" rel="noreferrer noopener">
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
          <Button onClick={() => console.log(getMovie(imdbID))}>
            Add to Watchlist
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
