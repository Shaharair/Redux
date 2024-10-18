import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './Components/Slice/ReduxSlice'

export default configureStore({
  reducer: {
    counter: ReduxSlice
  },
})