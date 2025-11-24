var mysql = require('mysql')
var connMySQL = () => {
    console.log('conectando db')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portalnews'}
    )
}   
module.exports = () => {
    return connMySQL; 
}