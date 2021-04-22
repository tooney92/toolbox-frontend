import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// eslint-disable-next-line
import { BASE_URL, NGROK_URL } from './constants'
const getToken = () => {
  return JSON.parse(localStorage.getItem('user'))?.userToken
}
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
})
apiClient.interceptors.request.use(config => {
  Nprogress.start()
  return config
})
apiClient.interceptors.response.use(
  response => {
    Nprogress.done()
    return response
  },
  error => {
    Nprogress.done()
    if (error.response.status === 403) {
      console.log('take me some other place')
    }
    return Promise.reject(error)
  }
)
export { apiClient }
