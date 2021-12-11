const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database :"mydb"
});

module.exports=connection;