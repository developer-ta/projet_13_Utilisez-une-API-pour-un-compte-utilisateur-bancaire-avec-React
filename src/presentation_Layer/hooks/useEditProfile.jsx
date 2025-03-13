import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useEditProfile() {
  const [messageInvalid, setMessageInvalid] = useState('');
  const { state } = useLocation();
  const { userProfile } = useSelector((state) => state.UserProfileReducer);
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(true);

  const dispatch = useDispatch();
  const profileService = new UserProfileService(new UserProfileRepo());
  const profile = new UserProfile();

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

    const token = state || profileService.getToken(navigate);
    if (token) {
      const data = {
        firstName: profile.firstName,
        lastName: profile.lastName,
      };
      const res = await profileService.updateProfile(token, data);
      dispatch(updateProfile({ ...res }));
    }
  });

  const editModeHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  });
  const cancelHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  });

  return {
    setUserProfile,
    userProfile,
    editModeHandler,
    isEditMode,
    messageInvalid,
    cancelHandler,
  };
}
