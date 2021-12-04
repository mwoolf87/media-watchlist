import "./App.css";
//importing react-bootstrap css in app.js
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import OAuth from "./components/OAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/oauth" element={<OAuth />} />
          <Route exact path="/login" element={<Login />} />
          {/* rendering MovieList component within app.js to keep code clean */}
          <Route exact path="/" element={<MovieList />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
