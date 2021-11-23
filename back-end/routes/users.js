var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// access via 4000/users/register : prefix with 4000/users from routes folder
router.post("/register", async (req, res)=> {
  res.setHeader("Content-Type", "application/json");
  let hash;
    bcrypt.genSalt(10, (err, salt)=> {
      hash = bcrypt.hash(req.body.password, salt, (err, hash)=> {
        if(!err){
          user.create ({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hash,
          })
          res.status(200)
        } else {
          res.send("Did not post");
        }
      })
    })
});

module.exports = router;
