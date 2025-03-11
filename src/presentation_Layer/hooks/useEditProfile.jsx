import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useEditProfile() {
  const { userProfile } = useSelector((state) => state.UserProfileReducer);
  const [isEditMode, setIsEditMode] = useState(true);

  const dispatch = useDispatch();
  const profileService = new UserProfileService(new UserProfileRepo());
  const profile = new UserProfile();

  const setUserProfile = useCallback(async (e) => {
    e.preventDefault();
    editModeHandler();
    const formData = e.target.elements;
    profile.firstName = formData.firstName.value;
    profile.lastName = formData.lastName.value;
  });

  const editModeHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  });



  return { setUserProfile, userProfile, editModeHandler, isEditMode };
}
