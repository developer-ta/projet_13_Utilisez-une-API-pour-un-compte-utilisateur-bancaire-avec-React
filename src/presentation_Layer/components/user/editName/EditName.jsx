import { useLocation, useParams } from 'react-router-dom';
import './EditName.scss';
import useProfile from '../../../hooks/useProfile';

export default function EditName({firstName,lastName}) {



  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  );
}
