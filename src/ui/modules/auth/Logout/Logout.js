import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToken } from 'utils/auth'
import { useHistory } from 'react-router-dom'

const LogoutFunc = () => {
  const dispatch = useDispatch()
  removeToken()
  dispatch({ type: 'auth.LOGOUT' })
  const history = useHistory()
  history.push('/')
  return <></>
}

export default LogoutFunc
