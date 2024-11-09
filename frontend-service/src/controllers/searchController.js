const axios = require('axios');
const { getCache, setCache } = require('../cacheHelper');
const {getCatalogUrl} = require("../loadBalancer");

const search = async (req, res) => {
    try {
        const topic = req.params.topic;

        const cachedData = getCache(topic);
        if (cachedData) {
            console.log(`Cache hit for topic: ${topic}`);
            return res.json(cachedData.data);
        }

        const catalogUrl = `${getCatalogUrl()}/search/${topic}`;
        const response = await axios.get(catalogUrl);

        setCache(topic, response.data);
        return res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `${err.message} : error searching books in req to catalog service` });
    }
};

module.exports = { search };
