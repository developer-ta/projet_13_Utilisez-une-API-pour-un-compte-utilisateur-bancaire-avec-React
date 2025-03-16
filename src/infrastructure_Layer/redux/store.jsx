import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userLoginReducer from './slices/user/userLogin';
import UserProfileReducer from './slices/user/userProfile';
import UserAccountReducer from './slices/user/userAccount';

const store = configureStore({
  reducer: {
    userReducer,
    userLoginReducer,
    UserProfileReducer,
    UserAccountReducer,
  },
});

export default store;
