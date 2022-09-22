import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';
import './pages.css';

const Categories = () => {
  const text = useSelector((state) => state.categoriesReducer);
  const [status, setStatus] = useState('');
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    setCounter(counter + 1);
    setStatus(counter % 2 === 0 ? text : '');
  };

  useEffect(() => {
    dispatch(checkBookStatus());
  }, [dispatch]);

  return (
    <section className="categories-container">
      <button type="button" onClick={handleClick}>Check Status</button>
      <br />
      <button type="button">{status}</button>
    </section>
  );
};

export default Categories;
