
import './UserAccount.scss';

export default function UserAccount({ account }) {

  const { id, accountName, availableBalance, status } = account;

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{`${accountName} (${id})`}</h3>
        <p className="account-amount">{availableBalance}</p>
        <p className="account-amount-description">{`${status} Balance`}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}
