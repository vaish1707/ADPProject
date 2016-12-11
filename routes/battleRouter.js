var express = require('express');
var battleCtrl = require('./../controllers/battleController');

var battleRouter = express.Router();

battleRouter.route('/fetch')
    .get(battleCtrl.getAllBattle);

battleRouter.route('/battleNumber/:battleNumber')
    .get(battleCtrl.getBattleById);


battleRouter.route('/getAllAttackerKingName')
    .get(battleCtrl.getAllAttackerKingName);


battleRouter.route('/battleYear/:year')
    .get(battleCtrl.getAllByYears);


module.exports = battleRouter;
