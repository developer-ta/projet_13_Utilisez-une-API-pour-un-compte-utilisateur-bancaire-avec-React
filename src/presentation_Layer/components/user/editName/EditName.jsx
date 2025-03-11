import { useLocation, useParams } from 'react-router-dom';
import './EditName.scss';
import useProfile from '../../../hooks/useProfile';
import useEditProfile from '../../../hooks/useEditProfile';

export default function EditName({ firstName, lastName }) {
  const { userProfile, isEditMode, setUserProfile, editModeHandler } = useEditProfile();

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userProfile.firstName} {userProfile.lastName}!
        </h1>
        {isEditMode && (
          <button className="edit-button" onClick={editModeHandler}>
            Edit Name
          </button>
        )}
        {!isEditMode && (

          <form
            className="formEditProfile"
            onSubmit={(e) => {
              setUserProfile(e);
            }}
          >
            <div className="buttonSection">
              <input type="text" id="firstName" placeholder={firstName} />
              <input type="text" id="lastName" placeholder={lastName} />
            </div>
            <div className="inputSection">
              <button type="submit">Save</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  );
}
