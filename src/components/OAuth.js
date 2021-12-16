import React from "react";
import Button from "react-bootstrap/Button";

export default function OAuth() {


  //create user in backend with oauth info: fn to direct info

  return (
    <>
      <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://media-watch-list.herokuapp.com/auth/github';
      }} block size="lg" type="submit">
        Github Login 
      </Button>
    </>
  );
}

// onClick={()=>githubLogin()}
