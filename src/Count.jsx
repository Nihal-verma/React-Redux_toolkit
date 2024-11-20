import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/todo/counter';

function Count() {
    const count = useSelector((state) => state.counter.value); // Access Redux state
    const dispatch = useDispatch(); // Access dispatch
  return (
    <div>
       <h1>Count is {count}</h1>
        
    </div>
  )
}
export default Count