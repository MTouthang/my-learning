// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountAsync } from './redux/thunk';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const asyncClick = () => {
    dispatch(fetchCountAsync());
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={asyncClick}>Fetch Async Count (Simulated)</button>
    </div>
  );
};

export default Counter;
