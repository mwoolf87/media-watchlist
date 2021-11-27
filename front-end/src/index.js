const passport = require("passport");
require("./passport");

// Express
const express = require('express');
const app = express();

/* Middleware  
const isLoggedIn = require('./Middleware/auth') */

// Passports
app.use(passport.initialize());
app.use(passport.session());

/* app.get('/',isLoggedIn,(req,res)=>{
  res.send(`Hello world ${req.user.displayName}`)
}) */

app.get("/auth/error", (req, res) => res.send("Unknown Error"));

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/error" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

app.listen(3000, () => {
  console.log("Server is up and running at the port 3000");
});