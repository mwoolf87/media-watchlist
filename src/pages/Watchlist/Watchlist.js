import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import WatchListCard from "./WatchListCard";
import "../Search/MovieCard.css"
import "./Watchlist.css"

export default function WatchList() {
  const local = window.localStorage;
  // eslint-disable-next-line
  const userID = local.getItem("userID");
  const [watchListData, setWatchListData] = useState([]); //initializing state to store movie data from our api call in an array

  useEffect(() => {
    const getWatchListData = () => {
      axios
        .get(`https://new-mwl-backend.onrender.com//watchlist/${userID}`)
        .then(res => setWatchListData(res.data));
    };

    getWatchListData();
  }, []);

  return (
    <div>
      {String(local.getItem("first")) &&
      String(local.getItem("last")) === "null" ? (
        <div>
          <h1>Guest Media-Watchlist</h1>
          <div>
            <a id = "blueLink" href = "https://mediawatchlist.onrender.com/login">Login</a> or create an <a id = "blueLink" href = "https://media-watch-list.herokuapp.com/login">account</a> to save movies to watchlist</div>
        </div>
      ) : (
        <h1>
          {String(local.getItem("first"))} {String(local.getItem("last"))}'s
          Media-Watchlist
        </h1>
      )}
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
                <WatchListCard
                  movie={movie}
                  setWatchListData={setWatchListData}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
