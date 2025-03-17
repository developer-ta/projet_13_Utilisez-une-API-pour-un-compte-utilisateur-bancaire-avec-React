import { createSlice } from '@reduxjs/toolkit';



const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: { userProfile: {} },
  reducers: {
    setProfile: function (state, action) {
      const { payload } = action;
     

      state.userProfile = payload;
     
    },
    updateProfile: function (state, action) {
      const { firstName, lastName, id } = action.payload;
  

      state.userProfile.firstName = firstName;
      state.userProfile.lastName = lastName;
      state.userProfile.id = id;
    },
  },
});

export const { setProfile, updateProfile } = userProfileSlice.actions;

const profileReducer = userProfileSlice.reducer;
export default profileReducer;

