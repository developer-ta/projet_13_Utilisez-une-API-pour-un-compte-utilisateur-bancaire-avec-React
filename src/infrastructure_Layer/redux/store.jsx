import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './slices/user/userLogin';
import UserProfileReducer from './slices/user/userProfile';
import UserAccountReducer from './slices/user/userAccount';

const store = configureStore({
  reducer: {
    userLoginReducer,
    UserProfileReducer,
    UserAccountReducer,
  },
});

export default store;
