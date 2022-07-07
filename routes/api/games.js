const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games')

router.post('/new', gamesCtrl.create)

module.exports = router