import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOption: "Overview",
  selectedGraph: "LINE"
};


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateSelectedOption : (state, action) => {
      return {...state, selectedOption: action.payload}
    },
    updateSelectedGraph : (state, action) => {
      return {...state, selectedGraph: action.payload}
    }
  },
});

export const { updateSelectedOption, updateSelectedGraph } = dataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSelectedOption = (state) => state.data.selectedOption;
export const selectSelectedGraph = (state) => state.data.selectedGraph

export default dataSlice.reducer;
