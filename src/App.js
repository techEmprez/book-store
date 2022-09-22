import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
// eslint-disable-next-line import/extensions
import Books from './components/addBook';
import NavBar from './components/navigation';
import Categories from './components/pageCart';

const App = () => (
  <Router>
    <NavBar />
    <section className="content">
      <Routes>
        <Route path="/*" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </section>
  </Router>
);

export default App;
