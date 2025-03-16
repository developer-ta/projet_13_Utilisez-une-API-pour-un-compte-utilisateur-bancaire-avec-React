import postForTakeAccounts from '../infrastructure_Layer/api/user/account/bankAccountRepo';

export default async function getUserAccount(token) {
  const res = await postForTakeAccounts(token);
  if (res) return res;
  else {
    return undefined;
  }
}
