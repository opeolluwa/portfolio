require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const cors = require('cors')


const skills = require('./routes/skills')
const mails = require('./routes/mails')


app.use(cors())
app.use("/skills", skills)
app.use("/mails", mails)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});
