const express = require('express');

const Login = require('../controllers/Auth/Login')
const Register = require('../controllers/Auth/Register')

const router = express.Router();

router.get('/login',Login);
router.get('/register',Register);

module.exports = router