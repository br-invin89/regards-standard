import axios from 'axios'
import store from 'epics/store'
import { baseUrl } from 'config/api'
import { getToken } from 'utils/auth'

const callApi = (method, needAuth, path, data, doneCallback, failCallback) => {
  let options = {}
  if (needAuth) {
    const token = getToken()
    if (!token) {
      if (failCallback) failCallback('Token not exists.')
      store.dispatch({
        type: 'api.API_FAILED',
        payload: { errorMessage: 'Token not exists' },
      })
      return
    }
    options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    }
  }
  store.dispatch({ type: 'api.API_STARTED' })
  let axiosCall
  if (method === 'POST') {
    if (needAuth) {
      axiosCall = axios.post(`${baseUrl}${path}`, data, options)
    } else {
      axiosCall = axios.post(`${baseUrl}${path}`, data)
    }
  } else if (method === 'GET') {
    if (needAuth) {
      axiosCall = axios.get(`${baseUrl}${path}`, options)
    } else {
      axiosCall = axios.get(`${baseUrl}${path}`)
    }
  }
  axiosCall
    .then((res) => {
      if (doneCallback) doneCallback(res.data)
      store.dispatch({ type: 'api.API_DONE' })
    })
    .catch((err) => {
      let errorMessage = 'Network error.'
      if (err.response) {
        errorMessage = err.response.data.error.message
      }
      if (failCallback) failCallback(errorMessage)
      store.dispatch({ type: 'api.API_FAILED', payload: { errorMessage } })
      setTimeout(() => {
        store.dispatch({ type: 'api.CLEAR_ERROR_MESSAGE' })
      }, 2500)
    })
}

export const callPostApi = (path, data, doneCallback, failCallback) => {
  callApi('POST', false, path, data, doneCallback, failCallback)
}

export const callGetApiWithAuth = (path, doneCallback, failCallback) => {
  callApi('GET', true, path, undefined, doneCallback, failCallback)
}
