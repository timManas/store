import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import mongoose from 'mongoose'
import Product from './models/Products.js'
import products from './data/products.js'

const addData = async () => {
  try {
    const host = await mongoose.connect(process.env.MONGO_URI)
    const data = await Product.insertMany(products)
    console.log(data)
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

addData()
