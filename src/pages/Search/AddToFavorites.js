// promise waits for a 200 from database
import React from "react";
import React, { useEffect } from "react";

localStorage.setItem("UserName", "");
const { user } = useAuth0();
const { email } = user;

console.log(email);

useEffect(() => {
    console.log("useEffect")(async function () {
        const urlString = "https://new-mwl-backend.onrender.com//users/" + email;
        console.log(email);
        await fetch(urlString, {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((response) => {
            // console.log(response.status);
            if (response.status === 200) {
                // console.log("The response is: ", response);
                localStorage.setItem("UserName", response[0].userName);
                // console.log(localStorage.getItem("UserName"));
            } else {
                document.location.replace("https://new-mwl-backend.onrender.com:3000/registration");
            }
        });
    });
}, [email]);

export default function AddToFavorites() {
    return (
        <div>
            
        </div>
    )
}
