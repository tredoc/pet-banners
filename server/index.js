require('dotenv').config()
const express = require('express')
const { Client } = require('pg')

const client = new Client();
client.connect()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello mzfk )')
})

const PORT = 9000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})