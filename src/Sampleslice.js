import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const url = 'asdasdasdasdasd';
export const getFetchSample = createAsyncThunk('path', () => {
  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
const sampleState = {
  a: [],
  b: false,
  c: 0,
};
const sampleSlice = createSlice({
  name: 'init',
  sampleState,
  reducers: {
    mthd: state => {
      state.a = ['a'];
    },
  },
  extraReducers: {
    [getFetchSample.pending]: state => {
      state.b = true;
    },
    [getFetchSample.fulfilled]: (state, action) => {
      state.b = false;
      state.a = action.payload;
    },
    [getFetchSample.rejected]: state => {
      state.b = false;
    },
  },
});

export default sampleSlice.reducer;
