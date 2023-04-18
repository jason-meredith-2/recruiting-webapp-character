import { configureStore } from '@reduxjs/toolkit'
import attributeReducer from './reducers/attributeSlice'
import skillReducer from './reducers/skillSlice'

export default configureStore({
  reducer: {
    attribute: attributeReducer,
    skill: skillReducer
  }
})
