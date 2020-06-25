const express = require('express')
const Products = require('./getProducts')
const products = require('../products.json')

const app = express();
const port = 6666
app.use(express.json())

app.get('/api/products', Products.getProducts)
app.get('/api/product/:id', Products.searchID)

app.post('/api/product', Products.addProduct)


app.listen(port, () => console.log(`server running on ${port}`))
console.log(products)