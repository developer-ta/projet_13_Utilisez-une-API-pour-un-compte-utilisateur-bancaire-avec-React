export async function fetchWriteData(hrefUrl, reqMethod, reqBody) {
  try {
  
    const res = await fetch(hrefUrl, {
      method: reqMethod,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    // const res = await fetch('http://localhost:3001/api/v1/user/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: 'tony@stark.com',
    //     password: 'password123',
    //   }),
    // });

    let message = '';
    if (!res.ok) {
      message = res.status == 400 ? 'Invalid Fields' : 'Internal Server Error';
      throw new Error(`Response status: ${res.status} => ${message}`);
    }
    message = 'Login Successfully';
    console.log(`Response status: ${res.status} => ${message}`);
    return res.json();
  } catch (error) {
    console.log('error request not succeed!  ' + error);
  }
}
