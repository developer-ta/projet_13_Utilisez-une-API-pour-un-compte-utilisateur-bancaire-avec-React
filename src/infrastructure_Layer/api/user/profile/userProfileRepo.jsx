import { fetchWriteData } from '../../../common/fetchWriteData';

export default class UserProfileRepo {
  constructor() {
    this.hrefUrl = 'http://localhost:3001/api/v1/user/profile';
    this.requestMethod = 'POST';
    this.res = null;
    this.data = null;
  }

  postUserToken = async (token) => {
    const result = await fetchWriteData(this.hrefUrl, this.requestMethod, this.data, token);
    if (result) {
      this.res = result;

      return this.res;
    }
    return this.res;
  };

  saveToken = (token) => {
    localStorage.setItem('AuthToken', token);
  };
}
