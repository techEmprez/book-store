import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

export default function books(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/FETCH_BOOKS/fulfilled':
      return action.payload.books;
    case 'bookstore/books/addBook/fulfilled':
      return [...state, { ...action.payload }];
    case 'bookstore/books/removeBook/fulfilled':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(
  ADD_BOOK, async (book) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FPg74flRaEHbEGAikGL1/books', {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Not Provided',
    });
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    };
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK, async (id) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FPg74flRaEHbEGAikGL1/books/${id}`);
    return { id };
  },
);

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FPg74flRaEHbEGAikGL1/books');
    const bookList = Object.entries(res.data).map((book) => ({
      id: book[0],
      ...book[1][0],
    })) || [];
    return { books: bookList };
  },
);
