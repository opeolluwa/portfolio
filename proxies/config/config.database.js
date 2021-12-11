require('dotenv').config()
const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'mysql.db.mdbgo.com',
    user: 'opeolluwa_hoodlums',
    password: '39F#0sts',
    database: 'opeolluwa_fresh'
})


// DB_HOST=mysql.db.mdbgo.com
// DB_USER=opeolluwa_opeolluwarx
// DB_PASS=39F#0sts
// DB_SCHEMA=opeolluwa_fresh
// DB_DIALET=mysql
// SECRET_KEY="The_Old_Withch_Of_Endor




//-----------------------PRODUCTION--------------------
// const database = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password:process.env.ACCESS_KEY,
//     database: process.env.SCHEMA
// })


module.exports = database ;