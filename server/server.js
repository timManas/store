import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './config/db.js'

const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(morgan('combined'))

app.use('/api/product', productRoutes)
app.use('/api/login', userRoutes)

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} ...`)
})

/**
- Users
- Transactions
- Service
- Refunds
    -> Email
- Cancellations
    -> Email


- Products
- Services 



 */
