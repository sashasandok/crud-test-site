import 'regenerator-runtime'
import { Client } from 'pg'

export const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// export const db = new Client({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'test-db',
//   password: '',
//   port: 5432,
// })
