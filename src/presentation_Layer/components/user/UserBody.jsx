import useBankAccount from '../../hooks/useBankAccount';

import EditName from './editName/EditName';
import UserAccount from './userAccount/UserAccount';
import './UserBody.scss';


export default function UserBody() {
  const { userAccounts } = useBankAccount();


  if (!userAccounts) {
    return <h1>loading ...</h1>;
  }
  return (
    <main className="main bg-dark">
      <EditName />

      {userAccounts.map((account, index) => {
        return <UserAccount key={index} account={account} />;
      })}
    </main>
  );
}
