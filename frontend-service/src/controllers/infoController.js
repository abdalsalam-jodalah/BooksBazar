const axios = require('axios');
const { getCache, setCache } = require("../cacheHelper");
const {getCatalogUrl} = require("../loadBalancer");

const info = async (req, res) => {
    try {
        const item_number = req.params.item_number;
        const cachedData = getCache(item_number);
        if (cachedData) {
            console.log(`Cache hit for item: ${item_number}`);
            return res.json(cachedData.data);
        }
        const catalogUrl = `${getCatalogUrl()}/info/${item_number}`;
        const response = await axios.get(catalogUrl);

        setCache(item_number, response.data);
        return res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `${err} : error in info on books in req to catalog service` });
    }
};

module.exports = { info };
