import { Pool } from 'pg'

export default () => {
  const client = new Pool({
    user: 'aleks',
    host: '127.0.0.1',
    database: 'test_app',
    password: 'lesenka',
    port: 5432,
  })

  return client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('PosgeSQL database was connected!')
    }
  })
}
