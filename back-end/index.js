// server/index.js
const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();

const db = require('./models/index.js');
const Sequelize = require('sequelize');
const { User } = require('./models');

const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});
module.exports = pool;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


// Test get
app.get('/test', async (req, res) => {
    res.status(200).send("Hello World");
  });

// READ all Users
app.get('/users', async (req, res) => {
    res.setHeader("Content-Type","application/json");
    const allUsers = await User.findAll();
    console.log(allUsers);
    res.status(200).send(allUsers);
  });

//Get users by lastName
app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });