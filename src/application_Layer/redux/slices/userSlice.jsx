import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../domain_Layer/user';

const userReducerFuncs = {
  increment: (state) => {
    state.userProfile.id = 'increment';
  },
  decrement: (state) => {
    state.userProfile.id = 'decrement';
  },
  addToNum: (state, action) => {
    console.log('action: ', action);
    state.userProfile.email = action.payload;
  },
};

const user = new User();

const initialState = {
  userProfile: {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    passWord: user.passWord,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: userReducerFuncs,
});

export const { increment, decrement, addToNum } = userSlice.actions;

//async func
export const fetchChannels = () => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3001/');
    if (res.ok) {
      console.log('res.ok: ', res.ok);
      const resText = await res.text();
     dispatch(addToNum(resText))

      return;
    }
    console.log('res.status: ', res.status);
    // return res.status;
  };
};

const userReducer = userSlice.reducer;
export default userReducer;
