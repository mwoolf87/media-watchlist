import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Watchlist from "./pages/watchlist/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/Navigation";
import About from "./pages/about/About";
import OAuth from "./components/OAuth";
import MediaList from "./pages/search/MediaList";
import ToastNotification from "./components/shared/ToastNotification";
import WatchListCard from "./pages/watchlist/WatchListCard";
import Dashboard from "./pages/dashboard/Dashboard";
import Logout from "./pages/logout/Logout";

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
          <Route path="/favorites" element={<WatchListCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
