import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../application_Layer/redux/slices/user/userLogin';

export default function useLogin(params) {
  const { userLogin } = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();
  const loginData = {};

  const setUserLogin = (formLoginData) => {
    loginData.password = formLoginData.password.value;
    loginData.email = formLoginData.username.value;
    loginData.isAuthMemo = formLoginData[2].checked;
    dispatch(login(loginData));
  };
  
  return {
    setUserLogin,
  };
}
