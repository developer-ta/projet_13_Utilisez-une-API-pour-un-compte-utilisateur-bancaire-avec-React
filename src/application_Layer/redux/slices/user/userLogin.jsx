import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../../domain_Layer/user';

function setLogin(state, action) {
//   const { passWord, email, token, isAuthMemo } = action.payload;

  state.userLogin=action.payload;
  console.log('action.payload: ', action.payload);
}

const user = new User();

const userLogin = {
  email: user.email,
  passWord: user.passWord,
  token: user.token,
  isAuthMemo: false,
};

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: { userLogin },
  reducers: { login: setLogin },
});

console.log('userLoginSlice: ', userLoginSlice);

export const { login } = userLoginSlice.actions;

//async func
export const fetchChannels = () => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3001/',{
		
	});
    if (res.ok) {
      console.log('res.ok: ', res.ok);
      const resText = await res.text();
      dispatch(addToNum(resText));

      return;
    }
    console.log('res.status: ', res.status);
  };
};

const userLoginReducer = userLoginSlice.reducer;

export default userLoginReducer;
