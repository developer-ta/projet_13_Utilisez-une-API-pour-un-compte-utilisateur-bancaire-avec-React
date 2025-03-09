import UserLoginRepo from '../../infrastructure_Layer/api/user/login/userLoginRepo';

/**
 *
 * @param {UserLoginRepo} userLoginRepo
 * @returns
 */
// export default async function userLoginService(userLoginRepo) {
//    const res =await userLoginRepo.postUserLogin();
//    if (res.token) {

//    }
//   return res;
// }

/**
 *
 */
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
}
