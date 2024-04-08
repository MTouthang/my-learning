
import './App.css';
import { useCounter } from './useCounter';

function App() {
  const {count, increment, decrement} = useCounter()
  return (
  <> 
    <p> {count}</p>
    <button onClick={increment}> Increment</button>
    <button onClick={decrement}> decrement</button>
  </>
  );
}

export default App;
