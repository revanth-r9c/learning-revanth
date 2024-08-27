// var express = require('express');
// var router = express.Router();
// const usersControllers = require("../controllers/users");

// /* GET users listing. */
// router.get('/', usersControllers.index);

// router.post("/login", usersControllers.createUser );

// module.exports = router;

var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");

/* GET users listing. */
// router.get('/', usersController.index);
router.post('/', usersController.createUser);
router.post('/login',usersController.login);
router.get('/', usersController.getUser);

module.exports = router;