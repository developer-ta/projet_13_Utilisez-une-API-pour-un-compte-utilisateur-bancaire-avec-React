import { useCallback, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useEditProfile() {
  //state
  const [messageInvalid, setMessageInvalid] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  //location
  const { state } = useLocation();
  const navigate = useNavigate();

  //get token
  const token = useRef(state || profileService.getToken()).current;

  //redux
  const { userProfile } = useSelector((state) => state.UserProfileReducer);
  const dispatch = useDispatch();

  //service
  const profileService = new UserProfileService(new UserProfileRepo());
  const profile = new UserProfile();

  //submit form
  const setUserProfile = useCallback(async (e) => {
    e.preventDefault();

    const formData = e.target.elements;
    profile.firstName = formData.firstName.value;
    profile.lastName = formData.lastName.value;

    //check input
    if (!profile.firstName.trim() || !profile.lastName.trim()) {
      setMessageInvalid('Attention ! firstName ou lastName ne peut pas être vide ');
      return;
    } else {
      editModeHandler();
      setMessageInvalid((m) => (m = ''));
    }
    //check token
    if (token) {
      const data = {
        firstName: profile.firstName,
        lastName: profile.lastName,
      };
      const res = await profileService.updateProfile(token, data);
     
      dispatch(updateProfile({ ...res }));
    } else {
      profileService.redirectionToLogin(navigate);
    }
  });

  // edit mode handler
  const editModeHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  }, []);

  // for cancel bottom
  const cancelHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
    setMessageInvalid((m) => (m = ''));
  }, []);

  return {
    setUserProfile,
    userProfile,
    editModeHandler,
    isEditMode,
    messageInvalid,
    cancelHandler,
  };
}
