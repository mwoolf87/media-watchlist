import "./App.css";
//importing react-bootstrap css in app.js

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import OAuth from "./components/OAuth";
import Test from "./components/Test";
import MediaList from "./components/MediaList";
import DetailPage from "./components/DetailPage";
import ToastNotification from "./components/ToastNotification";
import FavoritesCard from "./components/FavoritesCard";

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
          
          <Route exact path="/" element={<MediaList />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favorites" element={<FavoritesCard />} />

          <Route path="/about" element={<About />} />
          <Route path="/moreinfo" element={<DetailPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
