import React from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "../CSS/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const local = window.localStorage;
  const navigate = useNavigate();

  function logout() {
    fetch("https://new-mwl-backend.herokuapp.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message) {
          local.clear();
          navigate("/");
        }
        toast.success("Logout Successful!");
      });
  }

  return (
    <div class="dashboard">
      {String(local.getItem("first")) &&
      String(local.getItem("last")) === "null" ? (
        <h2 className="text-center">
          Welcome, Guest! <br></br> Please Login to Edit your Credentials
        </h2>
      ) : (
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>
              <h4>User Dashboard</h4>
            </Card.Title>
            <Card.Title>
              <p>
                Welcome, {String(local.getItem("first"))}{" "}
                {String(local.getItem("last"))}
              </p>
            </Card.Title>
            <Card.Title>
              <div>Email: {String(local.getItem("email"))}</div>
            </Card.Title>
            <div>
              <form class="input">
                <label>
                  Update Email:
                  <input class="input-class" type="text" name="email" />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" />
              </form>
            </div>
            {/* User clicks button, updates email to new email, show toast information */}
            <div>
              <form>
                <label>
                  Update Password:
                  <input class="input-class" type="text" name="email" />
                </label>
                <input className="button-19 m-2" type="submit" value="Submit" />
              </form>
            </div>
            {/* User click buttons, gives option to update password 
            toast notifcation that user password has been updated */}
            <button class="button-19 m-2">Delete Account</button>
            {/* Delete account, delete user and then switch user to registration page
            show toast notifcation that account has been delete */}
            <button class="button-19 m-2" onClick={logout}>
              Log Out
            </button>
            {/* Logout from account */}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Dashboard;
