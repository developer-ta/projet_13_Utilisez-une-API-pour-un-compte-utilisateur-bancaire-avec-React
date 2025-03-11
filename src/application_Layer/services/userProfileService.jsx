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
    if (token) navigate('/login');
  }

  async updateProfile(token, data) {
    console.log('data: ', data);
    const { body } = await this._userProfileRepo.putUserProfile(token, data);

    return body;
  }
}
