import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useProfile() {
  const { state } = useLocation();
  const { userProfile } = useSelector((state) => state.UserProfileReducer);

  const dispatch = useDispatch();
  const profileService = new UserProfileService(new UserProfileRepo());
  const profile = new UserProfile();
  useEffect(() => {
    const fetchData = async () => {
      const token = state || localStorage.getItem('authToken');
      const res = await profileService.getProfileData(token);
      dispatch(setProfile({ ...res }));
    };
    const res = fetchData();
    console.log('userProfile: ', userProfile);
    // profile.toProfile(res)
    // const ProfileData =
  }, []);

  return { userProfile };
}
