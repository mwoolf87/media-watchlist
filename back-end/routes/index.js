const express = require('express');
const app = express();

const server = http.createServer(app);

var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//pgp and db requirements
const pgp = require("pg-promise")();
const db = pgp("postgres://@127.0.0.1:5432/capstone");