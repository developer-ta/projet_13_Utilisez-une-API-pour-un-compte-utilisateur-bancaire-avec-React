export default class UserProfileService {
  constructor(userProfileRepo) {
    this._userProfileRepo = userProfileRepo;
  }

  async getProfileData(token) {
    const {body} = await this._userProfileRepo.postUserToken(token);
	
    return body;
  }

  getToken(){
    const token =  localStorage.getItem('authToken');
    if (token) navigate('/login');
  }

}
