require('dotenv').config()
const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'drizzle',
    password: '39F#0sts',
    database: 'opeolluwa'
})

//-----------------------PRODUCTION--------------------
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password:process.env.ACCESS_KEY,
//     database: process.env.SCHEMA
// })


module.exports = database ;