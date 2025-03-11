import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userLoginReducer from './slices/user/userLogin';
import UserProfileReducer from './slices/user/userProfile';

const store = configureStore({
  reducer: {
    userReducer,
    userLoginReducer,
    UserProfileReducer,
  },
});

export default store;
