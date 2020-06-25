const products = require('../products.json')


module.exports = {
 getProducts: (req, res) =>{
    res.status(200).send(products)
},
searchID: (req, res) =>{
    let productId = products.find(e=>e.id === +req.params.id)
    console.log(productId)
    res.status(200).send(productId)
},
addProduct: (req, res) =>{
let newProduct = {
    id:products[products.length -1].id + 1,
    product_name: req.body.product_name,
    price: req.body.price,
    img_url: req.body.img_url
}
products.push(newProduct)
res.status(200).send(products)
}

}

