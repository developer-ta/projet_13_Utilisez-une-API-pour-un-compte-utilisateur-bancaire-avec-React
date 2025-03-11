export class UserProfile {
  constructor() {
    this.id = '';
    this.email = '';

    this.firstName = '';
    this.lastName = '';
  }
  toProfile(data) {
	console.log('data: ', data);
    this.id = data.id;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
