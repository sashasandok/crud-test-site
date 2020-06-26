import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import file from './src/api/routes/file'

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(cors())

app.use(bodyParser.json())

// app.use('/api', file)

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port: ${process.env.PORT}`)
})