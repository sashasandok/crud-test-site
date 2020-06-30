import 'regenerator-runtime'
import { Client } from 'pg'

export const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

// export const db = new Client({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'test-app',
//   password: '',
//   port: 5432,
// })
