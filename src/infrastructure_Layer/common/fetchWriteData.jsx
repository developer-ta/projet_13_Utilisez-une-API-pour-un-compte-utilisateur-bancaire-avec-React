export async function fetchWriteData(hrefUrl, reqMethod, reqBody, token) {
  try {
    const res = await fetch(hrefUrl, {
      method: reqMethod,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token && 'Bearer ' + token,
      },

      body: reqBody && JSON.stringify(reqBody),
    });

    let message = '';
    if (!res.ok) {
      if (res.status == 400) message = 'Invalid Fields';
      else if (res.status == 500) message = 'Internal Server Error';
      else if (res.status == 401) message = 'Cannot read properties of undefined (reading "trim")';

      throw new Error(`Response status: ${res.status} => ${message}`);
    }
    message = 'Login Successfully';
    console.log(`Response status: ${res.status} => ${message}`);
    return res.json();
  } catch (error) {
    console.log('error request not succeed!  ' + error);
  }
}
