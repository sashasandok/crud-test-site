import 'regenerator-runtime'
import { Pool } from 'pg'

export const db = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'test-app',
  password: 'lesenka',
  port: 5432,
})
