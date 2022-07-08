const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games')

router.post('/', gamesCtrl.create)
router.get('/', gamesCtrl.find)
router.get('/:gameId', gamesCtrl.findOne)


module.exports = router