import EditName from './editName/EditName';
import UserAccount from './userAccount/UserAccount';
import './UserBody.scss';

const accounts = [
  { title: 'Argent Bank Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
  { title: 'Argent Bank Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
  { title: 'Argent Bank Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
];
export default function UserBody() {
  

  return (
    <main className="main bg-dark">
      <EditName />
      {accounts.map((account, index) => {
        return <UserAccount key={index} account={account} />;
      })}
    </main>
  );
}
