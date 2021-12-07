/* Boilerplate Express */

const path = require('path');
const express = require("express");
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const Sequelize = require('sequelize');
const { User } = require('./models');
const http = require('http');
const server = http.createServer(app);

const db = new Sequelize("d6vl2mh8hnhqlt"
  , "jrxhfgxrxvltjk"
  , "1243c6b65a282c3f1a9780f2ad5ec7bd6fb539710dc50e7770bcee15b9979629", {
  host: "ec2-44-193-111-218.compute-1.amazonaws.com",
  dialect: 'postgres',
});

/* Test DB */
db.authenticate()
  .then(() => console.log('Database Connected'))
  .catch(err => console.log('Error' + err))

/* Middleware */
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

/* Security */
const helmet = require('helmet');
app.use(helmet());

// Clear issues up with CORS to remove any Access Control Errors
const cors = require('cors');
app.use(cors());
app.set('view engine', 'html');
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
    // console.log(`${req.method} ${req.path}`);
    next();
  });

// Test get
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});


  /* Read All Users */ 
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

/* Read User by Id */
app.get('/users/:id', async (req, res) => {
  try{
      const oneUser = await User.findByPk(req.params.id);
      res.json(oneUser);
  } catch (e) {
      console.log(e);
      res.status(404).json({
          message: 'User not found'
      });
  }
});


/* Create User */
app.post('/users', async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
  const { firstName, lastName, email, hash, favoriteBooks, favoriteFlicks, favoriteApps } = req.body;
  const newUser = await User.create({
      firstName: req.body.firstName, 
      lastName: req.body.lastName,
      email: req.body.email,
      hash: req.body.hash,
      favoriteBooks: req.body.favoriteBooks,
      favoriteFlicks: req.body.favoriteFlicks,
      favoriteApps: req.body.favoriteApps
  });
   // Send back the new user's ID in the response:
   res.json({
    id: newUser.id
  });
})


/* Update */
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const userFound = await User.findByPk(id);
  console.log(userFound);
  // Check that user exists in the database
  if (userFound === null) {  // If the user doesn't exist
      // console.log('User id not found');
      res.status(400).json({message: "User id doesn't exist in database"});
      } else {
      // Assemble paramaters from ones that exist in the request
      const updatedUser = await User.update(req.body, {where: {id} });
      res.json(updatedUser);
      };
});

/* Delete */
app.delete('/users/:id', async (req, res) => {
  const {id} = req.params;
  // Check that user exists in the database
  const oneUser = await User.findByPk(id);
  // If not found return "User id does not exist within database"
  if (oneUser === null) {
    // console.log('User not found');
    res.status(400).json('User not found');
  } else {
  // If found then delete
    const deletedUser = await User.destroy({ where: {id} });
    // console.log('User deleted');
    res.json(deletedUser);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});