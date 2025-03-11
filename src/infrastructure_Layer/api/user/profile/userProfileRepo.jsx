import { fetchWriteData } from '../../../common/fetchWriteData';

export default class UserProfileRepo {
  constructor() {
    this.hrefUrl = 'http://localhost:3001/api/v1/user/profile';
    this.requestMethod = '';
    this.res = null;
    this.data = null;
  }

  postUserToken = async (token) => {
    this.requestMethod = 'POST';
    this.data = null;
    const result = await fetchWriteData(this.hrefUrl, this.requestMethod, this.data, token);
    if (result) {
      this.res = result;

      return this.res;
    }
    return null;
  };
  putUserProfile = async (token, profileData) => {
	console.log('profileData: ', profileData);
    this.requestMethod = 'PUT';
    const result = await fetchWriteData(this.hrefUrl, this.requestMethod, profileData, token);
    if (result) {
      this.res = result;

      return this.res;
    }
    return null;
  };

  saveToken = (token) => {
    localStorage.setItem('AuthToken', token);
  };
}
