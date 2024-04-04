const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.status(201).json({ message: 'Data created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await Data.find().sort({ timestamp: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};