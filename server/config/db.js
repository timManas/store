import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const host = await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to db on port: ' + host.connections[0].port)
  } catch (err) {
    console.log(err)
  }
}

export { connectDB }
