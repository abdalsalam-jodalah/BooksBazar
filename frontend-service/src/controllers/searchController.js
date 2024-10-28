const axios = require('axios');
const search = async (req, res) => {
    try {
        const topic = req.params.topic;
        const catalogUrl = `http://localhost:8081/search/${topic}`;
        const response = await axios.get(catalogUrl);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `${err.message} : error searching on books in req to catalog service` });
    }
};

module.exports = { search };
