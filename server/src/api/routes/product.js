const express = require('express')
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require('../services/product')

const router = express.Router()

router.get('/product', getProducts)
router.get('/product/:productId', getProductById)
router.post('/product', createProduct)
router.put('/product/:productId', updateProduct)
router.delete('/product/:productId', deleteProduct)

module.exports = router
