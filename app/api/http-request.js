import axios from 'axios'

function createHttpClient (options) {
  return axios.create(options)
}

const options = {}

const httpRequest = createHttpClient(options)

export default httpRequest

