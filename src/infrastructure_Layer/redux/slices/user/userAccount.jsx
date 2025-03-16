import { createSlice } from '@reduxjs/toolkit';

const userAccountSlice = createSlice({
  name: 'userAccounts',
  initialState: { userAccounts: [] },
  reducers: {
    setAccount: function (state, action) {
      const { payload } = action;
      console.log('payload: ', payload);

      state.userAccounts = payload;
    },
  },
});

export const { setAccount } = userAccountSlice.actions;

const Reducer = userAccountSlice.reducer;
export default Reducer;
