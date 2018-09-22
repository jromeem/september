var express = require('express');
var faker = require("faker");
var router = express.Router();

/* GET API page. */
router.get('/', function(req, res, next) {
  res.status(200).send("Welcome to our restful API");
});

// get /user as test
router.get('/user', function(req, res, next) {
  var data = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email()
  });
  res.status(200).send(data);
});

// create a user
router.get('/users/:num', function(req, res, next) {
  var users = [];
  var num = req.params.num;
  
  if (isFinite(num) && num  > 0 ) {
    for (i = 0; i <= num-1; i++) {
      users.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email()
      });
    }
    res.status(200).send(users);
  } else {
    res.status(400).send({ message: 'invalid number supplied' });
  }
});

module.exports = router;
