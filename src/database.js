const mysql = require('promise-mysql');
const keys = require('./keys');

const pool = mysql.createPool(keys);
pool.getConnection().then(Connection => {
    pool.releaseConnection(Connection);
    console.log(`Base de datos ${keys.database} conectada con exito`)
});
module.exports = pool;