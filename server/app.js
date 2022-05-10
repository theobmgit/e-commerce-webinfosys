const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const products = require('./router/products')
const db = require('./config/db')
const app = express()
const PORT = 5000

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.use('/products', products)

app.post('/checkout/address', (req, res) => {
    const {fullName, mobilePhone, houseNo, district, province} =
        req.body.address
    const order = req.body.order
    const totalBill = req.body.totalBill
    db.query(
        `insert into Customer(full_name, house_no, district, province, mobile_number)
         values ("${fullName}", "${houseNo}", "${district}", "${province}", "${mobilePhone}");`,
        () => {
            db.query(
                `select customer_id
                 from Customer
                 where customer_id >= all (select customer_id from Customer)`,
                (err, customer_id) => {
                    db.query(
                        `insert into CustomerOrder(customer_id, total, discount, status)
                         values (${customer_id[0].customer_id}, ${totalBill}, 0, 'pending')`,
                        () => {
                            db.query(
                                `select order_id
                                 from CustomerOrder
                                 where order_id >= all (select order_id from CustomerOrder)`,
                                (err, order_id) => {
                                    order.forEach((item) => {
                                        db.query(
                                            `insert into OrderDetails(order_id, product_id, quantity)
                                             values (${order_id[0].order_id}, ${item.product_id}, ${item.quantity})`
                                        )
                                    })
                                }
                            )
                        }
                    )
                }
            )
        }
    )

    res.status(201).json({msg: 'data posted successfully'})
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})
