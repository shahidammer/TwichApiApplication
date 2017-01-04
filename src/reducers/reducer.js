import { Map, List, fromJS } from 'immutable'
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import { types } from '../constants'

const defaults = Map({
  isFetching: false,
  isFailed: false,
  channels: List()
})

const data = (state = defaults, action) => {
  switch (action.type) {
    case types.FETCHING_CHANNELS:
      return fromJS({
        isFetching: true,
        isFailed: false
      })
    case types.CHANNELS_FETCHED:
      return fromJS({
        isFetching: false,
        channels: List(action.channelInfo.map(item => item))
      })
    case types.CHANNELS_FAILED_FETCHING:
      return fromJS({
        isFetching: false,
        isFailed: true
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data,
  routing: routerReducer
})
export default rootReducer
