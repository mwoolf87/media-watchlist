import React from "react";
import Button from "react-bootstrap/Button";

export default function OAuth() {
  // const githubLogin = () => {
  //   fetch("http://localhost:4000/auth/github", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       'Access-Control-Allow-Origin': 'http://localhost:4000',
  //       'Access-Control-Allow-Credentials': 'true'
  //     },
  //   }).then((res) => res.json());
  // };


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
