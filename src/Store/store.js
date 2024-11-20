import  {configureStore} from "@reduxjs/toolkit"
import counterSlice from "../features/todo/counter"
import multiplySlice from "../features/Multiply/index"
export const store = configureStore({
    reducer:{
        counter:counterSlice,
        multiply:multiplySlice
    },
})