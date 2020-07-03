import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css'
import ProductList from './pages/ProductList/ProductList'
import NotFound404 from './components/NotFound404/NotFound404'

const history = createBrowserHistory()

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route component={NotFound404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
