import { get, post, del, put } from './clientApi'

export default {
  getProducts: () => get('product'),
  getProductById: (id) => get(`product/${id}`),
  updateProduct: (id, data) => put(`product/${id}`, data),
  createProduct: (data) => post('product', data),
  deleteProduct: (id) => del(`product/${id}`),
}
