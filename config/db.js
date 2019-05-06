var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root1234",
    database:"p2pWebApp",
});

function query(sql,callback){
    console.log(sql)
    pool.getConnection(function(err,connection){
        if(err) {
            callback(err, null, null);
        } else {
            connection.query(sql, function (err,rows) {
                connection.release();
                callback(err,rows);
            });
        }
    });
}

exports.query = query;