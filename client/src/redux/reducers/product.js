import { handleActions } from 'redux-actions'
import {
  updateCollection,
  deleteFromCollection,
  addItem,
} from '../../utils/collections'
import actions from '../actions/product'

export const initialState = {
  isFetching: false,
  error: '',
  products: [],
  product: {},
}

export default handleActions(
  {
    // get products list
    [actions.product.get.request]: (state) => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.product.get.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      products: payload.products,
    }),

    [actions.product.get.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    // get product by id
    [actions.product.getById.request]: (state) => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.product.getById.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      product: payload.product,
    }),

    [actions.product.getById.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    // update product
    [actions.product.update.request]: (state) => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.product.update.success]: (state, { payload }) => {
      console.log(state, payload)
      return {
        ...state,
        isFetching: false,
        products: updateCollection(state.products, payload.product),
      }
    },

    [actions.product.update.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    // create product
    [actions.product.post.request]: (state) => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.product.post.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      products: addItem(state.products, payload.product),
    }),

    [actions.product.post.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    // delete product
    [actions.product.delete.request]: (state) => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.product.delete.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      products: deleteFromCollection(state.products, payload.id),
    }),

    [actions.product.delete.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
