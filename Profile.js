import React, { useState, useContext } from 'react';
import { AuthContext } from './auth-context';

const Profile = () => {
    const authCtx = useContext(AuthContext);
    const [newPassword, setNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handlePasswordUpdate = () => {
      setIsLoading(true);
  
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAPFg806HpqHHg4KsEvuz_eU1ugv6_GhOo`, {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            
            alert('Password updated successfully!');
            setNewPassword('');
          } else {
          
            throw new Error('Password update failed');
          }
        })
       // .catch((error) => {
        //  setIsLoading(false);
        //  alert('Error updating password: ' + error.message);
       // });
    };
  
    return (
      <div>
        <h2>Profile</h2>
        <form onSubmit={handlePasswordUpdate}>
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    );
  };
  

export default Profile;
