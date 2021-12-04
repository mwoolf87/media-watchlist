const express = require('express');
const app = express();
const http = require('https');

const server = http.createServer(app);

var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
