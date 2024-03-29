const express = require('express');
const {
  loginUser,
  createUser,
  currentUser,
} = require('../controllers/userController');

const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.get('/login', loginUser);
router.post('/', createUser);
router.get('/current', validateToken, currentUser);

module.exports = router;
