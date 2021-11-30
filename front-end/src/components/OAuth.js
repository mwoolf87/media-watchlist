import React from "react";
import axios from 'axios';

export default function OAuth() {
  const githubLogin = () => {
    fetch("http://localhost:4000/auth/github", {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Access-Control-Allow-Credentials': 'true'
      },
    }).then((res) => res.json());
  };
  return (
    <div>
      <button onClick={()=>githubLogin()} block size="lg" type="submit">
        Github Login 
      </button>
    </div>
  );
}
