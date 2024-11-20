import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/todo/counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowMultiply from './ShowMultiply/index';
import Count from './Count';
import IncreDecre from './IncreDecre';

function App() {
  const count = useSelector((state) => state.counter.value); // Access Redux state
  const dispatch = useDispatch(); // Access dispatch

  return (
    <>
      <Router>
        <div className="App">
          <h1>Count is {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <Count/>
        
        <Routes>
          <Route path="/multiply" element={<ShowMultiply />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
