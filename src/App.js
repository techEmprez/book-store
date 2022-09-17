import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import Books from './pages/Books';
import Catagories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Catagories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
