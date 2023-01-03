/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from 'react'
import { User } from '../api/Users'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localToken = localStorage.getItem('token')

    if (localToken) {
      setToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      getUser()
    }
  }, [token])

  const getUser = async () => {
    const userResponse = await User(token)
    setUser(userResponse)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const value = {
    setToken,
    user,
    logout,
    setUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }