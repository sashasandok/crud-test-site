import { db } from '../../database/db_config'

// get product list
export const getProducts = async (req, res, next) => {
  const query = `SELECT * FROM product`
  await db.query(query, (err, data) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.status(200).json({ data: data.rows })
    }
  })
}

// get product list
export const getProductById = async (req, res, next) => {
  const id = req.params.productId
  const query = {
    text: `SELECT * FROM product WHERE id=$1`,
    values: [id],
  }

  await db.query(query, (err, data) => {
    if (err) {
      console.log(err.stack)
    } else {
      if (data.rowCount > 0) {
        res.status(200).json({ data: data.rows })
      } else {
        res.status(400).json({ message: `Product with id ${id} not found` })
      }
    }
  })
}

// create product
export const createProduct = async (req, res, next) => {
  const query = {
    text: 'INSERT INTO product(title, avatar) VALUES($1, $2)',
    values: [req.body.title, req.body.avatar],
  }

  await db.query(query, (err, data) => {
    if (err) {
      console.log(err.stack)
    } else {
      res.status(200).json('Product successfully deleted')
    }
  })
}

// update product
export const updateProduct = async (req, res, next) => {
  const id = req.params.productId

  const query = {
    text: `UPDATE product SET title=$1, avatar=$2 where id=$3`,
    values: [req.body.title, req.body.avatar, id],
  }

  await db.query(query, (err, data) => {
    if (err) {
      console.log(err.stack)
    } else {
      if (data.rowCount > 0) {
        res
          .status(200)
          .json({ message: `Product with id ${id} successfully updated` })
      } else {
        res.status(400).json({ message: `Product with id ${id} not found` })
      }
    }
  })
}

// delete product
export const deleteProduct = async (req, res, next) => {
  const id = req.params.productId
  const query = {
    text: 'DELETE FROM product WHERE id=$1',
    values: [id],
  }

  await db.query(query, (err, data) => {
    if (err) {
      console.log(err.stack)
    } else {
      if (data.rowCount > 0) {
        res
          .status(200)
          .json({ message: `Product with id ${id} successfully deleted` })
      } else {
        res.status(400).json({ message: `Product with id ${id} not found` })
      }
    }
  })
}
