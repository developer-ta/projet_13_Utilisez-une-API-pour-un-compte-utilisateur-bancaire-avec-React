import { createSlice } from '@reduxjs/toolkit';

import { UserLogin } from '../../../../domain_Layer/userLogin';

const initiaUserLogin = {};

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: { userLogin: initiaUserLogin },
  reducers: {
    setLogin: function (state, action) {
      const { payload } = action;
      state.userLogin = payload;

    },
    checkIsAuthSecede: () => {
      state.userLogin.token && (state.userLogin.isAuthSecede = true);
    },
  },
});



export const { setLogin, checkIsAuthSecede } = userLoginSlice.actions;

const userLoginReducer = userLoginSlice.reducer;
export default userLoginReducer;

