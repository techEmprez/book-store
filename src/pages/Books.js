import React from 'react';
<<<<<<< Updated upstream
import AddBook from '../components/AddBook';
=======
import AddBook from '../components/Addbook';
>>>>>>> Stashed changes
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
