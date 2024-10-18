import { createSlice } from '@reduxjs/toolkit'

export const ReduxSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem("count")) ? JSON.parse(localStorage.getItem("count")) : 0
  },
  reducers: {
    increment: (state) => {
     let ami = state.value += 1
     localStorage.setItem("count",JSON.stringify(ami))
    },
    decrement: (state) => {
        if(state.value > 0){
            let tumi = state.value -= 1
            localStorage.setItem("count",JSON.stringify(tumi))
        }
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement} = ReduxSlice.actions

export default ReduxSlice.reducer