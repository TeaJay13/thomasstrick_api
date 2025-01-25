// const routes = require('express').Router();

// const baseController = require('../controllers/baseController');

// routes.get('/', baseController.getName);

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/users', require('./users'))
router.use('/products', require('./contacts'))

moudle.exports = router