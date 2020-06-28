import { createActions } from 'redux-actions'
import productMapper from '../../mappers/product'
import api from '../../api/product'

const actions = createActions({
  product: {
    get: {
      request: (x) => x,
      success: (x) => x,
      error: (x) => x,
    },
    getById: {
      request: (x) => x,
      success: (x) => x,
      error: (x) => x,
    },
    post: {
      request: (x) => x,
      success: (x) => x,
      error: (x) => x,
    },
    update: {
      request: (x) => x,
      success: (x) => x,
      error: (x) => x,
    },
    delete: {
      request: (x) => x,
      success: (x) => x,
      error: (x) => x,
    },
  },
})

export default actions

// get products list
export const getProducts = () => async (dispatch) => {
  dispatch(actions.product.get.request())

  try {
    const result = await api.getProducts()
    const products = result.data.map(productMapper)

    dispatch(
      actions.product.get.success({
        products,
      }),
    )
  } catch (e) {
    dispatch(actions.product.get.error({ error: e }))
    console.log(e)
  }
}

// get product by id
export const getProductById = (id) => async (dispatch) => {
  dispatch(actions.product.getById.request())

  try {
    const result = await api.getProductById(id)
    const product = result.data.map(productMapper)

    dispatch(
      actions.product.getById.success({
        product,
      }),
    )
  } catch (e) {
    dispatch(actions.product.getById.error({ error: e }))
    console.log(e)
  }
}

// update product
export const updateProduct = (id, data) => async (dispatch) => {
  dispatch(actions.product.update.request())

  try {
    await api.updateProduct(id, data)

    dispatch(
      actions.product.update.success({
        product: data,
      }),
    )
  } catch (e) {
    dispatch(actions.product.update.error({ error: e }))
    console.log(e)
  }
}

// create product
export const createProduct = (data) => async (dispatch) => {
  dispatch(actions.product.post.request())

  try {
    const result = await api.createProduct(data)
    const product = [result.data].map(productMapper)

    dispatch(
      actions.product.post.success({
        product,
      }),
    )
  } catch (e) {
    dispatch(actions.product.post.error({ error: e }))
    console.log(e)
  }
}

// delete product
export const deleteProduct = (id) => async (dispatch) => {
  dispatch(actions.product.delete.request())
  try {
    await api.deleteProduct(id)

    dispatch(actions.product.delete.success({ id }))
  } catch (e) {
    dispatch(actions.product.delete.error({ error: e }))
    console.log(e)
  }
}
