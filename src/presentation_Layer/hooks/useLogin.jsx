import { useDispatch, useSelector } from 'react-redux';
import UserLoginRepo from '../../infrastructure_Layer/api/user/login/userLoginRepo';
import { useCallback, useEffect, useState } from 'react';
import UserLoginService from '../../application_Layer/services/userLoginService';
import { setLogin } from '../../infrastructure_Layer/redux/slices/user/userLogin';
import { UserLogin } from '../../domain_Layer/userLogin';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [messageInvalidEmail, setMessageInvalidEmail] = useState('');
  const [messageInvalideIdentifie, setMessageInvalideIdentifie] = useState('');

  const navigate = useNavigate();

  const { userLogin } = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();

  let isInvalidIdentifie = false;

  const userLoginRepo = new UserLoginRepo();
  const loginService = new UserLoginService(userLoginRepo);
  const loginData = new UserLogin();

  //application layout
  const setUserLogin = useCallback(async (formLoginData) => {
    loginData.passWord = formLoginData.password.value;
    loginData.email = formLoginData.username.value;
    loginData.isAuthMemo = formLoginData[2].checked;

    //check email
    isInvalidIdentifie = loginService.validateEmail(loginData.email);
    if (!isInvalidIdentifie || !loginData.email.trim()) {
      setMessageInvalidEmail(
        'Veuillez saisir une adresse email valide. Le champ ne peut pas être vide et doit respecter le format correct'
      );
      return;
    } else if (!loginData.passWord.trim()) {
      setMessageInvalidEmail(
        'Veuillez saisir une password valide. Le champ ne peut pas être vide !'
      );
      return;
    } else {
      setMessageInvalidEmail((m) => (m = ''));
    }

    // check token
    const resToken = await loginService.getToken({
      email: loginData.email,
      password: loginData.passWord,
    });
    
    if (!resToken) {
      setMessageInvalideIdentifie(
        "L'adresse email ou le mot de passe ne peut pas être vide et doit être correct. Veuillez vérifier vos informations et réessayer."
      );
      return;
    } else {
      loginData.token = resToken.body.token;
      dispatch(setLogin({ ...loginData }));
      setMessageInvalideIdentifie((m) => (m = ''));
      loginService.toProfilePage(navigate, loginData.token);
    }
    if (loginData.isAuthMemo) {
      loginService.persistToken(loginData.token);
    }
  },[]);

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
    userLogin,
    messageInvalideIdentifie,
    messageInvalidEmail,
  };
}
