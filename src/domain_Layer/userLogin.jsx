export class UserLogin {
  constructor() {
    this.id = '1';
    this.email = '';
    this.passWord = '';
    this.firstName = '';
    this.lastName = '';
    this.token = '';
    this.isAuthMemo = false;
    this.isAuthSecede = false;
  }

  toObject() {
    return {
      email: this.email,

      firstName: this.firstName,

      id: this.id,

      isAuthMemo: this.isAuthMemo,

      isAuthSecede: this.isAuthSecede,

      lastName: this.lastName,

      passWord: this.passWord,

      token: this.token,
    };
  }
}
