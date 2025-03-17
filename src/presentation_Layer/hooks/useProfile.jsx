import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useProfile() {
  const { state } = useLocation();
  const { userProfile } = useSelector((state) => state.UserProfileReducer);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const profileService = new UserProfileService(new UserProfileRepo());


  useEffect(() => {
    const fetchData = async () => {
      const token = state || profileService.getToken(navigate);
      const res = await profileService.getProfileData(token);
   
      
      dispatch(setProfile({ ...res }));
  
    };
    fetchData();
  }, []);
}
