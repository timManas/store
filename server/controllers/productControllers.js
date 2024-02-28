import Product from '../models/Products.js'

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.send(products)
  } catch (err) {
    res.status(500).send('Error Unable to find products')
  }
}

const getProduct = async (req, res) => {
  console.log('Product id: ' + req.params.id)
  try {
    const product = await Product.findOne({ _id: req.params.id })
    res.send(product)
  } catch (err) {
    res
      .status(500)
      .send('Error Unable to find product with id: ' + req.params.id)
  }
}

export { getAllProducts, getProduct }
