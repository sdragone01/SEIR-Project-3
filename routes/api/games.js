const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games')

router.post('/', gamesCtrl.create)

module.exports = router