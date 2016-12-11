var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'battledb'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Database Connected');
    } else {
        console.log('Error while Connecting Database');
    }
});

var getAllBattle = function(req, res) {
    connection.query("select * from battles", function(err, result) {
        if (!err) {
            res.send(result);
        } else {
            console.log('Error while fetching result');
        }
    });
};

var getBattleById = function(req, res) {
    var battleNumber = req.params.battleNumber;
    var sqlQuery = "select * from battles where battle_number = " + battleNumber;
    connection.query(sqlQuery, function(err, result) {
        if (!err) {
            res.send(result);
        } else {
            console.log('Error while fetching result');
        }
    });
};


var getAllAttackerKingName = function(req, res) {
    connection.query("select distinct attacker_king from battles", function(err, result) {
        if (!err) {
        	var resultArr = new Array();
            resultArr = result;
            console.log('result', resultArr);
            res.send(result);
        } else {
            console.log('Error while fetching result', err);
        }
    });
}

var getAllByYears = function(req, res) {
    var battleYear = req.params.year;
    var sqlQuery = "select * from battles where year = " + battleYear;
    connection.query(sqlQuery, function(err, result) {
        if (!err) {
            var resultArr = new Array();
            resultArr = result;
            res.send(resultArr);
        } else {
            console.log('Error while fetching result');
        }
    });
}



module.exports = {
    getAllBattle: getAllBattle,
    getBattleById: getBattleById,
    getAllAttackerKingName: getAllAttackerKingName,
    getAllByYears: getAllByYears
};
