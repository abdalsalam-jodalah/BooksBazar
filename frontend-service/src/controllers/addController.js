const axios = require('axios');

const add = async (req, res) => {
    try {
        const { title, author, price, quantity, description } = req.body;
        if (!title || !author || !price || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const response = await axios.put(
            `${process.env.CATALOG_SERVICE_URL}/add`,
            { title, author, price, quantity, description },
            { headers: { 'Content-Type': 'application/json' } }
        );
        res.status(201).json({ message: 'Book added successfully', book: response.data });
    } catch (err) {
        res.status(500).json({ error: `Error adding book: ${err.message}` });
    }
};

module.exports = { add };
