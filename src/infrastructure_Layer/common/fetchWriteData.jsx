export async function fetchWriteData(hrefUrl, reqMethod, reqBody) {
  const res = await fetch(hrefUrl, {
    method: reqMethod,
    headers: { 'Content-Type': 'application/json' },
    body: reqBody,
  });
  try {
    const message = '';
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
