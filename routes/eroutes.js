const express = require('express')
const router = express.Router();

const controllers = require('../controllers/eControllers')
const controllers1 = require('../controllers/icontrollers')
const rcontroller = require('../controllers/razorController')


router.post('/poste',controllers.poste)
router.post('/poste1',controllers1.poste1)

router.get('/get-details',controllers.getDetails)
router.get('/get-details1',controllers1.getDetails1)

router.delete('/del/:id',controllers.del)
router.delete('/del1/:id',controllers1.del1)

router.get('/sum1',controllers1.sum1)
router.get('/sum',controllers.sum)

router.post('/prime',rcontroller.createOrder)

module.exports = router