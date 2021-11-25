const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()
const database = require("./../config/config.database")





const corsOptions = {
    // origin: 'http://opeolluwa.mdbgo.io/',
    origin: 'http://localhost:3003/',
    optionsSuccessStatus: 200
}

router.use(cors())

//search route
router.get('/', (req, res) => {
    database.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + database.threadId);
    });


    database.query("SELECT * FROM skills", (err, rows) => {
        if (err) return res.json({ rows: null, errors: err.message, })
        else return res.json({ rows, errors: null })
    })
})
module.exports = router