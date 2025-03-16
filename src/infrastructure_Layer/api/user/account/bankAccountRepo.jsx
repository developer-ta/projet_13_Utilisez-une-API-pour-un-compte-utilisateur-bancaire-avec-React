import { fetchWriteData } from '../../../common/fetchWriteData';

export default async function postForTakeAccounts(token) {
  const requestMethod = 'POST';
  const hrefUrl = 'public/user/bankAccount/response_accounts_bank.json';
  const data = undefined;
  const result = await fetchWriteData(hrefUrl, requestMethod, data, token);
  if (result) return result;
  return null;
}
