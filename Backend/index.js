import app from './api/index.js'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`BookStore API running on port ${port}`)
})
