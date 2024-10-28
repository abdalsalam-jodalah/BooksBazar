const axios = require('axios');
const purchase =async (req, res)=>{
    const item_number = parseInt(req.body.item_number, 10);
    try {
        const catalogResponse = await axios.get(`http://localhost:8081/info/${item_number}`);
        const book = catalogResponse.data;
        if (book.quantity > 0) {
            const quantity= book.quantity-1;
            await axios.post(`http://localhost:8081/update`,
                {item_number, quantity}

            );

            res.json({ message: `Successfully purchased book: ${book.title}` });
        } else {
            res.status(400).json({ error: 'Book out of stock' });
        }
    }catch (err) {
        res.status(500).json({ error: `'${err}error in purchase  books in req to order service' `});
    }
}
module.exports = {purchase};