import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import product from './product'

export default combineReducers({
  routing: routerReducer,
  product,
})
