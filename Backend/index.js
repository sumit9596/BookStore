import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 4000
const url = process.env.MONGO_URL
//connect to database through mongoose 

app.use(cors())
try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Connected to MongoDB")
} catch (error) {
    console.log(error);    
}



app.get('/', (req, res) => {
  res.send('Hello sdffsdf!')
})

app.use('/books',bookRoute) 
app.use(express.json())
app.use('/user', userRoute) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
