import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export default function FavoritesCard() {
    const [favorites, setFavorites] = useState();

  const getFavorites = () => {
      axios
        .get(
        `http://localhost:4000/favorites/1`)
      .then(res => setFavorites(res.data))
       };

  useEffect(() => {
      getFavorites();
  },[]);


  // title: 'Croupier',
  // poster: "./images/croupier.jpeg",
  // runTime: '1h 34m',
  // year: 1998,
  // director: "Mike Hodges",
  // rating: "NR",
  // UserId: 1,

  return (
      <div>
        { favorites && <div>
        <div>Title: {favorites.title}</div>
        <div>Poster: <img src = {favorites.poster} alt = "test" /> </div>
        <div>RunTime: {favorites.runTime}</div>
        <div>Year: {favorites.year}</div>
        <div>Director: {favorites.director}</div>
        <div>Rating: {favorites.rating}</div>
        </div>
         }
      </div>
  );
}