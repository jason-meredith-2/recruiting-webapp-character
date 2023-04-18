import { createSlice } from "@reduxjs/toolkit";
import { ATTRIBUTE_LIST } from "../consts";

const initialState = ATTRIBUTE_LIST.map(attribute => {
  return [attribute, 10];
})

export const attributeSlice = createSlice({
  name: 'attribute',
  initialState: Object.fromEntries(initialState),
  reducers: {
    increase: (state, action) => {
      state[action.payload] += 1;
    },
    decrease: (state, action) => {
      state[action.payload] -= 1;
    }
  }
})

export const { increase, decrease } = attributeSlice.actions;

export default attributeSlice.reducer
