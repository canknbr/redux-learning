import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './Sampleslice';
export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
