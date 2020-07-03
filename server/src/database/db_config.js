import 'regenerator-runtime'
import { Client } from 'pg'

export const db = new Client({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || '127.0.0.1',
  database: process.env.PGDATABASE || 'test-db',
  password: process.env.PGPASSWORD || '',
  port: process.env.PGPORT || 5432,
})
