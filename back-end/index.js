const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
const express = require('express');
const app = express();

const server = http.createServer(app);

/* Import Models*/
const Sequelize = require('sequelize');
const Users = require('./models/users');

/* Test */
app.get('/', (req, res) => {
    res.send('Hello World');
});

/* Create */
app.post('/users', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        hash,
        favoriteBooks,
        favoriteFlicks,
        favoriteApps
    });
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
})

/* Read */
app.get('/users', async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

/* Update */
app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
    
    // Assuming that `req.body` is limited to
    // the keys firstName, lastName, and email
    const updatedUser = await User.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});

/* Delete */
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await URLSearchParams.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// Code provided by nodejs.org