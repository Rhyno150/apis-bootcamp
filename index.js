import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const port = 3011;

let callPrice = 2.75;
let smsPrice = 0.65;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to calculate total phone bill
app.post('/api/phonebill/total', (req, res) => {
    const { bill } = req.body;
    const items = bill.split(',');
    let total = 0;

    items.forEach(item => {
        if (item.trim() === 'call') total += callPrice;
        if (item.trim() === 'sms') total += smsPrice;
    });

    res.json({ total: total.toFixed(2) });
});

// GET route to return current prices
app.get('/api/phonebill/prices', (req, res) => {
    res.json({ call: callPrice, sms: smsPrice });
});

// POST route to update prices
app.post('/api/phonebill/price', (req, res) => {
    const { type, price } = req.body;

    if (type === 'call') {
        callPrice = price;
    } else if (type === 'sms') {
        smsPrice = price;
    } else {
        return res.status(400).json({ status: 'failure', message: 'Invalid type' });
    }

    res.json({ status: 'success', message: `The ${type} was set to ${price}` });
});

// Start the server
const PORT = 3011;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});