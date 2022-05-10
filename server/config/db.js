const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    port: 3306,
    user: 'sql6491298',
    password: '44vem1fVrR',
    database: 'sql6491298',
})

module.exports = db
