const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()


router.use(cors())


//send route
router.post('/send', (req, res) => {
    const payload = req.body.payload
    console.log(req.body.payload)
    return res.send({ payload })
})

//upload 
router.get('/upload', (req, res) => {
    res.send({ mesage: "all goo over here bro" })
})


module.exports = router