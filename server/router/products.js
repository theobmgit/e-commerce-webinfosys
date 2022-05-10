const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require('../config/db')
const app = express()

app.use(cors())

router.get('/', (req, res) => {
    db.query(
        `select Product.product_id,
                ProductType.type_name,
                Product.product_name,
                Product.price,
                Product.description,
                Product.image,
                Product.rating,
                Product.quantity,
                Supplier.supplier_name
         from (((Product inner join SupplierProduct on Product.product_id = SupplierProduct.product_id) inner join Supplier on Supplier.supplier_id = SupplierProduct.supplier_id)
                  inner join ProductType on ProductType.type_id = Product.type_id); `,
        (err, result) => {
            res.status(200).send(result)
        }
    )
})
router.get('/:id', (req, res) => {
    const {id} = req.params
    db.query(
        `select Product.product_id,
                ProductType.type_name,
                Product.product_name,
                Product.price,
                Product.description,
                Product.image,
                Product.rating,
                Product.quantity,
                Supplier.supplier_name
         from (((Product
             inner join SupplierProduct on Product.product_id = SupplierProduct.product_id)
             inner join Supplier on Supplier.supplier_id = SupplierProduct.supplier_id)
                  inner join ProductType on ProductType.type_id = Product.type_id)
         where Product.product_id = ${Number(
                 id
         )};`,
        (err, result) => {
            res.status(200).send(result)
        }
    )
})

module.exports = router
