const mysql = require('mysql');

module.exports = mysql.createConnection({
    host : '35.193.118.123',
    port : '3306',
    user : 'challenge',
    password : '#Ch4L13ngE@Pwd#',
    database : 'ops_challenge'
});
