import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import product from './product'

export default combineReducers({
  routing: routerReducer,
  product,
  form: formReducer,
})
