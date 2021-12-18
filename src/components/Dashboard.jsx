import React from 'react'

function Dashboard() {
    return (
        <div>
            <h4>User "Username Here" Dashboard</h4>
            <div>First: "first" </div>
            <div>Last: "last"</div>
            <div>Email: "email"</div>
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
            
        </div>
    )
}

export default Dashboard
