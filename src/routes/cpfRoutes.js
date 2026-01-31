const express = require('express');
const { validar } = require('../controllers/cpfController');

const router = express.Router();

router.get('/validate', validar);

module.exports = router;
