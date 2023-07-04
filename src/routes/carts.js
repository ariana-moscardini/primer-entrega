const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.post('/', (req, res) => {
});

router.get('/:cid', (req, res) => {
});

router.post('/:cid/product/:pid', (req, res) => {
});

module.exports = router;
