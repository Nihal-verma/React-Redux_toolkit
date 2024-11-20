import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/todo/counter';
function IncreDecre() {
    const count = useSelector((state) => state.counter.value); // Access Redux state
    const dispatch = useDispatch(); // Access dispatch
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default IncreDecre
