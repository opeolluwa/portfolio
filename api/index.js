require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const cors = require('cors')
const skills = require('./routes/skills')


const corsOptions = {
    // origin: 'http://opeolluwa.mdbgo.io/',
    origin: 'http://localhost:3003/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


app.get('/', (req, res) => {
    res.send("ignitin started")
})
app.use("/skills", skills)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});
