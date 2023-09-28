const controller=require('../controllers/machines_functionality')
const express=require("express");
const router=express.Router();

router.post('/register',controller.Register)
router.get('/getAllInstances',controller.getAllInstances)
router.get('/getSingleInstances/:name',controller.getSingleInstances)
router.get('/getInstanceDetail/:name',controller.getInstanceDetail)
router.post('/updateInstance/:name',controller.updateInstance)



module.exports = router;