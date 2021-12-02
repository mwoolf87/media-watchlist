const Sequelize = require('sequelize');
const { User } = require('./models');

app.post('/users', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    const { firstName, lastName, email, hash } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        hash
    });
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
})

// Retrieving Users
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

//Get users by lastName
app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});