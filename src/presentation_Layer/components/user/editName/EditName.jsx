import './EditName.scss';
import useEditProfile from '../../../hooks/useEditProfile';
import useProfile from '../../../hooks/useProfile';

export default function EditName() {
  //first: update user profile store 
  useProfile();

  //seconde: edit profile and update store profile
  const {
    userProfile,
    isEditMode,
    setUserProfile,
    editModeHandler,
    messageInvalid,
    cancelHandler,
  } = useEditProfile();

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userProfile.firstName} {userProfile.lastName} !
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
              <input type="text" id="firstName" className="input-edit" placeholder="first name" />
              <input type="text" id="lastName" className="input-edit" placeholder="last name" />
            </div>
            <div className="inputSection">
              <button type="submit">Save</button>
              <button type="button" onClick={cancelHandler}>
                Cancel
              </button>
            </div>
            <div style={{ color: 'red', fontSize: '14px' }}>
              <p>{messageInvalid}</p>
            </div>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  );
}
