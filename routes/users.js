var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a res');
});

router.get('/1', function(req, res, next) {
  res.send({
    "name" : 'John',
    'Surname' : 'Atzheimer',
    'Age': 28
  });
});

module.exports = router;
