const axios = require('axios');
const { invalidateCache } = require('../cacheHelper');
const { getOrderUrl } = require('../loadBalancer');

const purchase = async (req, res) => {
    try {
        const { item_number } = req.body;
        console.log(`Purchasing item: ${item_number}`);
        invalidateCache(item_number);
        const orderUrl = getOrderUrl();
        const response = await axios.post(`${orderUrl}/purchase`, { item_number });
        return res.json(response.data);
    } catch (err) {
        console.error(`Error in purchaseController: ${err.message}`, err.response ? err.response.data : '');
        res.status(500).json({ error: `${err.message} : error in purchasing books in req to order service` });
    }
};

module.exports = { purchase };
