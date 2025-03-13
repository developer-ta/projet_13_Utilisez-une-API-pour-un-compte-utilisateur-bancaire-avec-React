export default class UserProfileService {
  constructor(userProfileRepo) {
    this._userProfileRepo = userProfileRepo;
  }

  async getProfileData(token) {
    const { body } = await this._userProfileRepo.postUserToken(token);

    return body;
  }

  getToken() {
    const token = localStorage.getItem('authToken');
    return token;
  }

  async updateProfile(token, data) {
    if (token) {
      const res = await this._userProfileRepo.putUserProfile(token, data);

      return res.body;
    }
  }

  redirectionToLogin(navigate) {
    navigate('/login');
  }
}
