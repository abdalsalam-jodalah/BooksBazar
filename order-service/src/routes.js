const express = require('express');
const router = express.Router();
const { purchase } = require('./controllers/purchaseController');

router.post( '/purchase' , purchase);
module.exports = router;
