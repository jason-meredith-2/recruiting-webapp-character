import { configureStore } from '@reduxjs/toolkit'
import attributeReducer from './reducers/attributeSlice'

export default configureStore({
  reducer: {
    attribute: attributeReducer
  }
})
