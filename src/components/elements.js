import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './pages.css';
import { removeBook } from '../redux/books/books';
import { ProgressBar } from './ProgressBar';

const ItemBook = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, categories,
  } = props;

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div className="block-l">
        <div className="info">
          <span className="categories">{categories}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="btn-container">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="block-r">
        <div className="stats">
          <div className="middle-bar">
            <div className="progress-circle">
              <ProgressBar />
            </div>
          </div>
          <div className="progress-text">
            <span className="stat-number">70%</span>
            <span className="stat-text">Completed</span>
          </div>
        </div>
        <div className="progress-info">
          <span className="chapter-title">Current chapter</span>
          <span className="chapter-number">Chapter 1</span>
          <button type="button" className="btn-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

ItemBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default ItemBook;
