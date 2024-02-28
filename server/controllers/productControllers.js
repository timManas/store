import Product from '../models/Products.js'

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.send(products)
  } catch (err) {
    res.statudCode(500).send('Error Unable to find products')
  }
}

const getProduct = (req, res) => {
  res.send(`Get product ${req.params.id}`)
}

export { getAllProducts, getProduct }
