import { BASE_URL, CLIENT_ID } from '../constants'
import axios from 'axios'

const createDataObject = (data, type) => {
  return {
    id: data._id,
    url: data.url,
    logo: data.logo,
    name: data.display_name,
    desc: data.status,
    status: type
  }
}
export const loadData = (channel, callback) => {
  return new Promise((resolve, reject) => {
    let url = BASE_URL + '/streams/' + channel + CLIENT_ID
    axios.get(url)
      .then(function (response) {
        if (response.data.stream === null || response.data.stream === undefined) {
          url = BASE_URL + '/channels/' + channel + CLIENT_ID
          axios.get(url)
            .then(function (response) {
              resolve(createDataObject(response.data, 'offline'))
            })
              .catch(function (error) {
                reject(error)
              })
        } else {
          resolve(createDataObject(response.data.stream.channel, 'online'))
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
