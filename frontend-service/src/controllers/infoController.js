const axios = require('axios');
const {getCache} = require("../cacheHelper");

const info = async (req, res) => {
    try {
        const item_number = req.params.item_number;

        // Check if data is already in the cache
        const cachedData = getCache(item_number);
        if (cachedData) {
            // Cache hit: return cached data
            console.log(`Cache hit for item: ${item_number}`);
            return res.json(cachedData.data);
        }

        // Cache miss: fetch data from the catalog service
        console.log(`Cache miss for item: ${item_number}. Fetching from catalog service...`);
        const response = await axios.get(`${process.env.CATALOG_SERVICE_URL}/info/${item_number}`);

        // Cache the response
        setCache(item_number, response.data);

        // Return the response to the client
        return res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `'${err} : error in info on books in req to catalog service'` });
    }
};

module.exports = { info };
