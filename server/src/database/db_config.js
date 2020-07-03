import 'regenerator-runtime'
import { Client } from 'pg'

export const db = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

// export const db = new Client({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'test-db',
//   password: '',
//   port: 5432,
// })
