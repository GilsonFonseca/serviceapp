import { configureStore } from '@reduxjs/toolkit'
import dealerReducer from './DealersRedux'

export default configureStore({
  reducer: {
    dealers: dealerReducer,
  },
})