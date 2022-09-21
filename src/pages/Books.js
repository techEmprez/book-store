import React from 'react';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

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
