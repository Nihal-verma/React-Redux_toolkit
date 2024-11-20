import { createSlice } from "@reduxjs/toolkit";
import { setValue } from "../todo/counter"; // Import counter action

const initialState = {};

export const multiplySlice = createSlice({
  name: "multiply",
  initialState,
  reducers: {
    multiply: (state, action) => {
      // Logic handled here
      const currentValue = action.payload; // Get current counter value
      return { value: currentValue * 2 }; // Return modified value for the slice (optional)
    },
  },
});

export const { multiply } = multiplySlice.actions;

// Thunk to update counter state via multiplySlice
export const multiplyCounterValue = (currentValue) => (dispatch) => {
  const newValue = currentValue * 2;
  dispatch(setValue(newValue)); // Update counter state
};

export default multiplySlice.reducer;
