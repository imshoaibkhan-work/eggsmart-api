const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/data', dataController.createData);
router.get('/data', dataController.getData);

module.exports = router;