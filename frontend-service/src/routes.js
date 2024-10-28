const express = require('express');
const router = express.Router();

const { purchase } = require('./controllers/purchaseController');
const { info } = require('./controllers/infoController');
const { search } = require('./controllers/searchController');

router.get('/search/:topic',search);
router.get('/info/:item_number',info)
router.post('/purchase', purchase);

module.exports = router;
