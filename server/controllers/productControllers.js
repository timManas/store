const getAllProducts = (req, res) => {
  res.send('Get All products')
}

const getProduct = (req, res) => {
  res.send(`Get product ${req.params.id}`)
}

export { getAllProducts, getProduct }
