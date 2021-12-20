import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import WatchListCard from "./WatchListCard";
export default function WatchList() {
  const local = window.localStorage;
  let userID = local.getItem("userID");
  const [watchListData, setWatchListData] = useState([]); //initializing state to store movie data from our api call in an array
  const getWatchListData = () => {
    axios
      .get(`https://new-mwl-backend.herokuapp.com/watchlist/${userID}`)
      .then(res => setWatchListData(res.data));
  };

  useEffect(() => {
    axios
      .get(`https://new-mwl-backend.herokuapp.com/watchlist/${userID}`)
      .then(res => setWatchListData(res.data));
  }, []);

  return (
    <div>
      <h1>
        {String(local.getItem("first"))} {String(local.getItem("last"))}{" "}
        Media-Watchlist
      </h1>
      <p> {local.getItem("userID")}</p>
      <Row>
        {watchListData &&
          watchListData.map((movie, id) => {
            return (
              <Col
                key={id}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={4}
                className="mb-6"
              >
                <WatchListCard movie={movie} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
