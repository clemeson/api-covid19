const express = require('express');
const router = express.Router()
const controller = require('../controller/controller')


router.get('/', controller.index)
router.get('/estado', controller.estado)


module.exports = router;
