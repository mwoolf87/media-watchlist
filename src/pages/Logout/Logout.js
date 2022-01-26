import React from 'react';
import "./Logout.css";

function logout() {
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
