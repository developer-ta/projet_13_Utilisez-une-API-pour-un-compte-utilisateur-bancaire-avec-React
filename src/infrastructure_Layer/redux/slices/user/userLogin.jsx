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
      console.log('state.userLogin: ', state.userLogin);
    },
    checkIsAuthSecede: () => {
      state.userLogin.token && (state.userLogin.isAuthSecede = true);
    },
  },
});

console.log('userLoginSlice: ', userLoginSlice);

export const { setLogin, checkIsAuthSecede } = userLoginSlice.actions;

const userLoginReducer = userLoginSlice.reducer;
export default userLoginReducer;

//async func
// export const fetchlo = () => {
//   return async (dispatch) => {
//     const res = await fetch('http://localhost:3001/',{

// 	});
//     if (res.ok) {
//       console.log('res.ok: ', res.ok);
//       const resText = await res.text();
//       dispatch(addToNum(resText));

//       return;
//     }
//     console.log('res.status: ', res.status);
//   };
// };
