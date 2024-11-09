const axios = require('axios');
const { getCache, setCache } = require('../cacheHelper');

const search = async (req, res) => {
    try {
        const topic = req.params.topic;

        // Check if the search results are in the cache
        const cachedData = getCache(topic);
        if (cachedData) {
            // Cache hit: return cached data
            console.log(`Cache hit for topic: ${topic}`);
            return res.json(cachedData.data);
        }

        // Cache miss: fetch data from the catalog service
        console.log(`Cache miss for topic: ${topic}. Fetching from catalog service...`);
        const catalogUrl = `${process.env.CATALOG_SERVICE_URL}/search/${topic}`;
        const response = await axios.get(catalogUrl);

        // Cache the search results
        setCache(topic, response.data);

        // Return the search results to the client
        return res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `${err.message} : error searching books in req to catalog service` });
    }
};

module.exports = { search };
