import { channelArr, types } from '../constants'
import { loadData } from './LoadData'

export const requestForChannels = () => ({
  type: types.FETCHING_CHANNELS
})
export const DataRecieved = (response) => ({
  type: types.CHANNELS_FETCHED,
  channelInfo: response
})
export const FetchError = (err) => ({
  type: types.CHANNELS_FAILED_FETCHING,
  error: err
})

export const fetchChannels = () => {
  let result = []
  let count = 0
  return function (dispatch) {
    dispatch(requestForChannels())

    channelArr.map((channel, i) => {
      loadData(channel)
      .then((data) => {
        count++
        result.push(data)
        if (count === channelArr.length - 1) {
          dispatch(DataRecieved(result))
        }
      })
      .catch((err) => {
        dispatch(FetchError(err))
      })
    })
  }
}
