# Redux Toolkit Starter

```js

npm install @reduxjs/toolkit react-redux

```

## setup store

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

- add Provider index.js

```js
import {store} from "store"
import {Provider} from "react-redux"
<Provider store={store}>
<App/>
<Provider>
```

### Slice

-create slice.js

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const url = 'sdfklsdf';
export const getFetchData = createAsyncThunk('path', () => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
});
export const getAxiosData =createAsyncThunk("path",async (_,thunkApi)=>{
    try{
        console.log(thunkApi.getState());
        const resp = await axios(url);
        return resp
    }catch(error){
        return thunkApi.rejectWithValue("error")
    }
})
const initState = {
  x: [],
  y: 0,
  z: false,
};
const initSlice = createSlice({
  name: 'init',
  initState,
  reducers: {
    mthd: state => {
      state.a = ['a'];
      //   return { ...state, a: [] };
    },
    mthd2: (state, action) => {
      let val = action.payload;
      state.b = state.b.someMethod(i => i.xyx === val);
    },
  },
  extraReducers:{
      [getFetchData.pending]:state=>{
          state.z = true
      },
      [getFetchData.fullfilled]:(state,action)=>{
          state.z = false
          state.x = action.payload
      },
      [getFetchData.rejected]:state=>{
          state.z? false
      }
  }
});
export const { mthd } = initSlice.actions;
export default initSlice.reducer;
```

- useSelector add a component

```js
import { useSelector, useDispatch } from 'react-reduc';
import {mthd,mthd2,getFetchData} from "./src/Sampleslice";
const dispatch = useDispatch();
const { x, y, z } = useSelector(state => state.init);
useEffect(()=>{
    dispatch(getFetchData())
},[])
<button
  onClick={() => {
    dispatch(mthd());
  }}
>
  sample
</button>
<button
  onClick={() => {
    dispatch(mthd2(param));
  }}
>
  sample2
</button>;;

```
