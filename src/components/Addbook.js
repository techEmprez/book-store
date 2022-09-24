import { useSelector, useDispatch } from 'react-redux';
import './pages.css';
import { useEffect } from 'react';
import Book from './elements';
import Form from './listForm';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <section className="book-list-container">
      <section className="book-list">
        {
          bookList.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.categories}
            />
          ))
        }
      </section>
      <Form />
    </section>
  );
};

export default Books;
