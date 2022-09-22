import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/configureStore';
import { fetchBooks } from './redux/books/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchBooks());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
