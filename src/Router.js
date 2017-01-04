import React from 'react'
// import './index.css'
import Main from './components/Main'
import AppContainer from './containers/AppContainer'
import Offline from './components/Offline'
import Online from './components/Online'
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={Main} />
        <Route path='/online' component={Online} />
        <Route path='/offline' component={Offline} />
      </Route>
    </Router>
  </Provider>
)
export default router
