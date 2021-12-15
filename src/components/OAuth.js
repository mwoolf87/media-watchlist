import React from "react";
import Button from "react-bootstrap/Button";

export default function OAuth() {
  const githubLogin = () => {
    fetch("https://new-mwl-backend.herokuapp.com/", {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'https://new-mwl-backend.herokuapp.com/',
        'Access-Control-Allow-Credentials': 'true'
      },
    }).then((res) => res.json());
  };


  //create user in backend with oauth info: fn to direct info

  return (
    <>
      <Button onClick={()=>githubLogin()} block size="lg" type="submit">
        Github Login 
      </Button>
    </>
  );
}
