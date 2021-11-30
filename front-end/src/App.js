import './App.css';
//importing react-bootstrap css in app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import MovieList from './components/MovieList';
import OAuth from './components/OAuth';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/oauth" element={<OAuth/>}/>
          <Route exact path="/login" element={<Login/>}/>
          {/* rendering MovieList component within app.js to keep code clean */}
          <Route exact path="/" element={<MovieList />}/>
          <Route path="/watchlist" element={<Watchlist />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
