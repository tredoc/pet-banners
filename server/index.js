const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello mzfk )')
})

const PORT = 9000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})