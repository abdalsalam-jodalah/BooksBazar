const axios = require('axios');
const purchase = async (req, res) => {
    try {
        const { item_number } = req.body;
        console.log(item_number)
        const response = await axios.post(`${process.env.ORDER_SERVICE_URL}/purchase`, { item_number });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error:  `'${err}error in purchasing on books in req to order service'` });
    }
};
module.exports = {purchase};
