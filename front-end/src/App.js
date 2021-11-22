import './App.css';
//importing react-bootstrap css in app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          {/* rendering MovieList component within app.js to keep code clean */}
          <Route exact path="/" element={<MovieList />}>
          </Route>
          <Route path="/watchlist" element={<Watchlist />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;