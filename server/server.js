import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import morgan from 'morgan'

const PORT = process.env.PORT || 5000
const app = express()

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} ...`)
})
