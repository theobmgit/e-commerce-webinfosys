const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const products = require('./router/products')
const address = require('./router/checkout/address')
const app = express()
const PORT = 5000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})
app.use('/products', products)

app.use('/checkout/address', address)

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})
