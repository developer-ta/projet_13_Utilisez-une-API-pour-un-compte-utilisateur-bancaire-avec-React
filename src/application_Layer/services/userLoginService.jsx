import UserLoginRepo from '../../infrastructure_Layer/api/user/login/userLoginRepo';

export default class UserLoginService {
  constructor(userLoginRepo) {
    this._userLoginRepo = userLoginRepo;
  }

  async getToken(data) {
    
    const token = await this._userLoginRepo.postUserLogin(data);

    return token;
  }
  persistToken(token) {
   
    this._userLoginRepo.saveToken(token);
  }
  validateEmail(email) {
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const isValid = pattern.test(email);
    return isValid;
  }
  toProfilePage(navigate, token) {
   
    token && navigate('/profile', { state: token });
  }
}
