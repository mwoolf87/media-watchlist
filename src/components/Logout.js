import React from 'react';
import "../CSS/Logout.css";

// Check for Session Storage
// If Session storage exists, give user option to logout
//      Once user clicks logout, redirect to user login page
// If no session storage exists, redirect user to login page

function logout {
    fetch('https://new-mwl-backend.herokuapp.com/logout', {
      method: "GET",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
    })
}

export default function Logout() {
    return (
        <div>
            <h1>User is logged out. Thanks for using Media Watch List!</h1>
        </div>
    )
}
