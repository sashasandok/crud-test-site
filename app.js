import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import favicon from 'express-favicon'
import product from './server/src/api/routes/product'
import { db } from './server/src/database/db_config'
import path from 'path'

const app = express()
const port = process.env.PORT || 4000

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(favicon(__dirname + '/build/favicon.ico'))

app.use(cors())
app.use(bodyParser.json())

// db
db.connect((err) => {
  // create table `product` if it not exist
  const query = `CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  avatar VARCHAR(15000) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  coast INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`

  db.query(query, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Table products was successfully created')
    }
  })

  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('PosgeSQL database was connected!')
  }
})

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/api', product)

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})
