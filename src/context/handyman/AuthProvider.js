import AuthContext from '../authContext'
import axios from 'axios'
import { apiClient } from '../../service'
import { NGROK_URL, BASE_URL } from '../../constants'

const HandymanAuthProvider = ({ children }) => {
  const login = async credentials => {
    try {
      const response = await axios.post(BASE_URL + '/admin/login', credentials)
      return response.data
    } catch (error) {
      console.log(error)
      return error.response.data
    }
  }

  const create = async adminInfo => {
    try {
      const response = await apiClient.post('admin/new-admin', adminInfo, {
        headers: { Accept: 'multipart/form-data' }
      })
      console.log(response)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }

  const logout = () => {
    console.log('entered')
    localStorage.removeItem('user')
    window.location.reload()
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
  }

  const verify = async email => {
    try {
      const response = await apiClient.post('admin/password-reset', { email })
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error)
      return error.response.data
    }
  }
  const changePassword = async data => {
    try {
      const response = await apiClient.post('admin/new-password', data)
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error)
      return error.response.data
    }
  }

  const value = {
    login,
    logout,
    getCurrentUser,
    create,
    verify,
    changePassword
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default HandymanAuthProvider
