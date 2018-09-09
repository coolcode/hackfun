const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World 2!'))

app.listen(PORT, () => console.log('Example app listening on port 5000!'))