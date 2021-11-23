import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Login.css";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const newVariable = "";
  let newEmail = "";
  let newPassword = "";

  function validateForm() {
    return newEmail.length > 0 && newPassword.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:4000/users/register', {
      firstName: "",
      lastName: "",
      email: newEmail,
      password: newPassword
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // function handleSubmit(event) {
    //   event.preventDefault();
  
    //   axios.post('http://localhost:4000/users/login', {
    //     email: newEmail,
    //     password: newPassword
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
  }
  console.log("string");
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Login to access cards</h4>
          <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            // value={newEmail}
            onChange={(e) => newEmail=(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={newPassword}
            onChange={(e) => newPassword=(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

    return (
      <>
        <Button block size="lg" onClick={() => setModalShow(true)}>
          Login
        </Button>

        <Button block size="lg" onClick={() => setModalShow(true)}>
          Signup
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}