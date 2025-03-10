import { fetchWriteData } from '../../../common/fetchWriteData';

export default class UserLoginRepo {
  constructor() {
    this.hrefUrl = 'http://localhost:3001/api/v1/user/login';
    // this.postBody;
    this.requestMethod = 'POST';
    // this.res = null;
    this.token = '';
  }

  postUserLogin = async (data) => {
   
    const result = await fetchWriteData(this.hrefUrl, this.requestMethod, data);
    if (result) {
      this.token = result;

      return this.token;
    }
    return this.token;
  };

  saveToken = (token) => {
    localStorage.setItem('AuthToken', token);
  };
}
// export const postUserLoginRepo = async (login) => {
//   const hrefUrl = 'http://localhost:3001/api/v1/user/login';
//   const postBody = JSON.stringify(login);
//   const requestMethod = 'POST';
//   const res = fetchWriteData(hrefUrl, requestMethod, postBody);
//   return res;
// };

// async function fetchData(hrefUrl, reqMethod, reqBody) {
//   const res = await fetch(hrefUrl, {
//     method: reqMethod,
//     headers: { 'Content-Type': 'application/json' },
//     body: reqBody,
//   });
//   try {
//     const message = '';
//     if (!res.ok) {
//       message = res.status == 400 ? 'Invalid Fields' : 'Internal Server Error';
//       throw new Error(`Response status: ${res.status} => ${message}`);
//     }
//     message = 'Login Successfully';
//     console.log(`Response status: ${res.status} => ${message}`);
//     return res.json();
//   } catch (error) {
//     console.log('error request not succeed!  ' + error);
//   }
// }

// {
// 	"status": 200,
// 	"message": "User successfully logged in",
// 	"body": {
// 	  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmU1ZmMxYjU3ZGJlODliY2Y5NWRkOSIsImlhdCI6MTc0MTIwMzc4MSwiZXhwIjoxNzQxMjkwMTgxfQ.fdpr8G3nHlgW4HQh0DRvb8EjnSPzRAabwLLxRoZdHYI"
// 	}
//   }
