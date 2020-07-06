var ibm_db = require('ibm_db');
var setting = require('./setting');

let db_str = "DRIVER={DB2}" +
    ";DATABASE=" + setting.DB_DATABASE +
    ";HOSTNAME=" + setting.DB_HOSTNAME +
    ";PORT=" + setting.DB_PORT +
    ";PROTOCOL=TCPIP" +
    ";UID=" + setting.DB_UID +
    ";PWD=" + setting.DB_PWD;
//let sql = "select * from DB2WML.HOME_SALES";
let sql = "select * from DB2WML.HOME_SALES ";
//db2 'select * from DB2WML.HOME_SALES WHERE ID = 1461';
process.env.DB2CODEPAGE = 1252;
//process.env.DB2CODEPAGE = 1208;
//process.env.DB2CODEPAGE = 819;

ibm_db.open(db_str, function(err, conn) {
    if (err) return console.log(err);

    console.log(setting.DB_DATABASE);
    conn.query(sql, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

        conn.close(function() {
            console.log('done.');
        });
    });
});