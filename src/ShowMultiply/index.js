import { useSelector, useDispatch } from "react-redux";
import { multiplyCounterValue } from "../features/Multiply"; // Import the thunk

const ShowMultiply = () => {
  const count = useSelector((state) => state.counter.value); // Access counter state
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(multiplyCounterValue(count))}>Multiply</button>
    </>
  );
};

export default ShowMultiply;
