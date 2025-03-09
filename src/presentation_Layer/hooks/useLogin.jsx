import { useDispatch, useSelector } from 'react-redux';
import UserLoginRepo from '../../infrastructure_Layer/api/user/login/userLoginRepo';
import { useCallback, useEffect } from 'react';
import UserLoginService from '../../application_Layer/services/userLoginService';
import { setLogin } from '../../infrastructure_Layer/redux/slices/user/userLogin';
import { UserLogin } from '../../domain_Layer/userLogin';

export default function useLogin() {
  const { userLogin } = useSelector((state) => state.userLoginReducer);

  const dispatch = useDispatch();
  let data = {};
  const userLoginRepo = new UserLoginRepo();
  const loginService = new UserLoginService(userLoginRepo);
  const loginData = new UserLogin();

  // useEffect(() => {
  //   console.log('useEffect:');
  //   dispatch(setLogin(data));
  // }, [data]);

  //application layout
  const setUserLogin = useCallback(async (formLoginData) => {
    loginData.passWord = formLoginData.password.value;
    loginData.email = formLoginData.username.value;
    loginData.isAuthMemo = formLoginData[2].checked;
    loginData.token = await loginService.getToken(loginData);
    if (loginData.token) {
      loginService.persistToken(loginData.token);
    }
    dispatch(setLogin({...loginData}));
  
    console.log('userLogin: ', userLogin);
  });
  // const setUserLogin = useCallback(async (formLoginData) => {
  //   const loginData = {};
  //   loginData.passWord = formLoginData.password.value;
  //   loginData.email = formLoginData.username.value;
  //   console.log('formLoginData[2].checked: ', formLoginData[2].checked);
  //   data.isAuthMemo = formLoginData[2].checked;
  //   data.token = await loginService.getToken(loginData);
  //   if (data.token) {
  //     loginService.persistToken(data.token);
  //   }
  //   data = { ...data, ...loginData };
  //   dispatch(setLogin(data));
  //   console.log('data: ', data);
  // });

  return {
    setUserLogin,
  };
}
