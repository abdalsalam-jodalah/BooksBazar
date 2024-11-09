const axios = require('axios');
const { invalidateCache } = require('../cacheHelper');

const purchase = async (req, res) => {
    try {
        const { item_number } = req.body;
        console.log(`Purchasing item: ${item_number}`);

        // Invalidate the cache for the item after purchase
        invalidateCache(item_number);

        // Call the order service to handle the purchase
        const response = await axios.post(`${process.env.ORDER_SERVICE_URL}/purchase`, { item_number });

        // Return the response from the order service
        return res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `'${err} : error in purchasing books in req to order service'` });
    }
};

module.exports = { purchase };
