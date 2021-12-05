require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')


const skills = require('./routes/skills')
const mails = require('./routes/mails')
const projects = require('./routes/projects')

app.get("/", (req, res) => {
    res.send("hello boyz")
})

app.use(cors())
app.use(express.json())
app.use("/skills", skills)
app.use("/mails", mails)
app.use("/projects", projects)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
});
