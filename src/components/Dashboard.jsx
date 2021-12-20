import React from 'react'
import {Card} from "react-bootstrap";
 
const storage = window.sessionStorage;

function Dashboard() {
    return (
        <div>
        <Card>
        <Card.Body>
            <Card.Title><h4>User Dashboard</h4></Card.Title>
            <Card.Title><p>Welcome, </p></Card.Title>
            <Card.Title><div>First {String(storage.getItem("first"))} </div></Card.Title>
            <Card.Title><div>Last: {String(storage.getItem("last"))}</div></Card.Title>
            <Card.Title><div>Email: {String(storage.getItem("email"))}</div></Card.Title>
            <div>
                <form>
                    <label>
                        Update Email: 
                        <input type="text" name="email" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
            {/* User clicks button, updates email to new email, show toast information */}
            <div>
                <form>
                    <label>
                        Update Password: 
                        <input type="text" name="email" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
            {/* User click buttons, gives option to update password 
            toast notifcation that user password has been updated */}
            <button>Delete Account</button>
            {/* Delete account, delete user and then switch user to registration page
            show toast notifcation that account has been delete */}
            <button>Logout</button>
            {/* Logout from account */}
            </Card.Body>
            </Card>
        </div>
    )
}

export default Dashboard
