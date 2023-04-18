import { createSlice } from "@reduxjs/toolkit";
import { ATTRIBUTE_LIST } from "../consts";

const initialState = ATTRIBUTE_LIST.map(attribute => {
  const state = {
    value: 10,
    modifier: 0
  };

  return [attribute, state];
})

const modifier = (value) => {
  return Math.floor((value - 10) / 2);
}

export const attributeSlice = createSlice({
  name: 'attribute',
  initialState: Object.fromEntries(initialState),
  reducers: {
    increase: (state, action) => {
      const newValue = state[action.payload].value + 1;

      state[action.payload].value = newValue;
      state[action.payload].modifier = modifier(newValue);
    },
    decrease: (state, action) => {
      if (state[action.payload].value === 0)
        return;

      const newValue = state[action.payload].value - 1;

      state[action.payload].value = newValue;
      state[action.payload].modifier = modifier(newValue);
    }
  }
})

export const { increase, decrease } = attributeSlice.actions;

export default attributeSlice.reducer
