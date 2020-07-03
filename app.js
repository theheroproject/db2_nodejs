var ibm_db = require('ibm_db');
var setting = require('./setting');

let db_str = "DATABASE=" + setting.db_name +
    ";HOSTNAME=" + setting.db_host +
    ";UID=" + setting.db_username +
    ";PWD=" + setting.db_password +
    ";PORT=" + setting.db_port +
    ";PROTOCOL=TCPIP=TCPIP";
let sql = "select * from test";

ibm_db.open(db_str, function(err, conn) {
    if (err) return console.log(err);

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