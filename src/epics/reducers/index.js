import { combineReducers } from 'redux'
import apiReducer from './api'
import authReducer from './auth'

const rootReducer = combineReducers({
  api: apiReducer,
  auth: authReducer,
})

export default rootReducer
