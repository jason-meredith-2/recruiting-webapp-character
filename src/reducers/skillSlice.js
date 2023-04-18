import { createSlice } from "@reduxjs/toolkit";
import { SKILL_LIST } from "../consts";

const initialState = SKILL_LIST.map(skill => {
  return [skill.name, 0];
})

export const skillSlice = createSlice({
  name: 'skill',
  initialState: {
    total: 0,
    ...Object.fromEntries(initialState)
  },
  reducers: {
    increase: (state, action) => {
      state[action.payload] += 1;
      state['total'] += 1;
    },
    decrease: (state, action) => {
      state[action.payload] -= 1;
      state['total'] -= 1;
    }
  }
})

export const { increase, decrease } = skillSlice.actions;

export default skillSlice.reducer
