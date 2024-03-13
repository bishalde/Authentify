const express = require('express');

const Login = require('../controllers/Auth/Login')
const Register = require('../controllers/Auth/Register')

const router = express.Router();

router.get('/login', function (req, res) {
    res.status(200).json({message:"Login API Route",method:"GET"});
})
router.post('/login',Login);

router.get('/register', function (req, res) {
    res.status(200).json({message:"Register API Route",method:"GET"});
})
router.post('/register',Register);

module.exports = router