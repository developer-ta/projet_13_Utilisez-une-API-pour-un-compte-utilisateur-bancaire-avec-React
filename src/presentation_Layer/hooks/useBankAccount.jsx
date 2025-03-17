import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';

import { setAccount } from '../../infrastructure_Layer/redux/slices/user/userAccount';
import getUserAccount from '../../application_Layer/services/userBankAccountService';

export default function useBankAccount() {
  const { state } = useLocation();
  const { userAccounts } = useSelector((state) => state.UserAccountReducer);
 

  const dispatch = useDispatch();
  const profileService = new UserProfileService(new UserProfileRepo());

  useEffect(() => {
    const token = state || profileService.getToken();
    if (token) {
      const fetchData = async () => {
        const res = await getUserAccount(token);
        if (res) dispatch(setAccount(res));

      };
      fetchData();
    }
  }, []);

  const editModeHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  }, []);
  const cancelHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
    setMessageInvalid((m) => (m = ''));
  }, []);

  return {
    userAccounts,
  };
}
