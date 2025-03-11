import { createSlice } from '@reduxjs/toolkit';

import { UserLogin } from '../../../../domain_Layer/userLogin';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: { userProfile: {} },
  reducers: {
    setProfile: function (state, action) {
	
      const { payload } = action;
	 
      state.userProfile = payload;
	  
     
    },
  },
});

export const { setProfile } = userProfileSlice.actions;

const profileReducer = userProfileSlice.reducer;
export default profileReducer;

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
