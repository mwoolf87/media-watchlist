import "./App.css";
//importing react-bootstrap css in app.js
import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import OAuth from "./components/OAuth";
import MediaList from "./components/MediaList";
import ToastNotification from "./components/ToastNotification";
import FavoritesCard from "./components/FavoritesCard";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <ToastNotification />
          <Routes>
            <Route exact path="/oauth" element={<OAuth />} />
            <Route exact path="/login" element={<Login />} />
            {/* rendering MovieList component within app.js to keep code clean */}
            <Route path="/medialist" element={<MediaList />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/favorites" element={<FavoritesCard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
