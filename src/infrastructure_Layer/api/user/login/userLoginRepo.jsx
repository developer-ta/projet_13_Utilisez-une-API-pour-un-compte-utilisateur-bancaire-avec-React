import { fetchWriteData } from '../../../common/fetchWriteData';

export default class UserLoginRepo {
  constructor() {
    this.hrefUrl = 'http://localhost:3001/api/v1/user/login';
    this.requestMethod = 'POST';
    this.token = '';
  }

  postUserLogin = async (data) => {
    const result = await fetchWriteData(this.hrefUrl, this.requestMethod, data);
    if (result) {
      this.token = result;

      return this.token;
    }
    return '';
  };

  saveToken = (token) => {
    localStorage.setItem('authToken', JSON.stringify(token));
  };
}
