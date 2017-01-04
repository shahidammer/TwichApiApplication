import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
// Import Reducers
import reducer from './reducers/reducer'

import { fetchChannels } from './actions/actionCreator'

const middleware = applyMiddleware(thunk)

const store = createStore(reducer, middleware)
store.dispatch(fetchChannels())

export const history = syncHistoryWithStore(browserHistory, store)
export default store
