const express = require('express');
const router = express.Router()
const controller = require('../controller/controller')


router.get('/', controller.index)
router.get('/infected', controller.infected)
router.get('/death', controller.death)


module.exports = router;
