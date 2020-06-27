import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import product from './src/api/routes/product'
import { db } from './src/database/db_config'

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(cors())
app.use(bodyParser.json())

// db
db.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('PosgeSQL database was connected!')
  }
})

app.use('/api', product)

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port: ${process.env.PORT}`)
})
