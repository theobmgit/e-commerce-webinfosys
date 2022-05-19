const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    port: 3306,
    user: 'sql6493190',
    password: 'XQlJ3ylXCw',
    database: 'sql6493190',
})

module.exports = db
