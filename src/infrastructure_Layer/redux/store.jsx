import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userLoginReducer from './slices/user/userLogin';

const store = configureStore({
  reducer: {
    userReducer,
    userLoginReducer
  },
});

export default store;
