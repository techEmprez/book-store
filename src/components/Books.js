import React, { useState } from 'react';
import Book from './Book';
import Addbook from './Addbook';

function Books() {
  const [book, setBook] = useState({
    title: 'Created to be Created',
    author: 'techEmprez, Trimz & Trimz',
  });

  const addBooks = (book) => {
    setBook({ ...book, ...book });
  };

  return (
    <div>
      <Book bookProps={book} />
      <Addbook addBookProps={addBooks} />
    </div>
  );
}

export default Books;
