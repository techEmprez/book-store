import React from 'react';
import AddBook from '../components/AddBook.js';
import Book from '../components/Book.js';

function Books() {
  const state = {
    books: [
      {
        id: 1,
        genre: 'Action',
        title: 'The power of Habit',
        author: 'James Clear',
      },
    ],
  };
  return (
    <>
      <Book books={state.books} />
      <AddBook />
    </>
  );
}

export default Books;
