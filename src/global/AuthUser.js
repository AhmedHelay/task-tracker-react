import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'
import {useApolloClient} from '@apollo/client'

import {ACCESS_TOKEN, REFRESH_TOKEN} from 'constants/tokens'
import {USER_ME_QUERY} from 'api/query/current_user'

const INITIAL_STATE = {user: null, isLoading: null}

const UserContext = createContext()
function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true
      }
    case 'loaded':
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken)
      localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken)
      return {
        user: action.payload.me,
        isLoading: false
      }
    case 'logout':
      localStorage.removeItem(ACCESS_TOKEN)
      localStorage.removeItem(REFRESH_TOKEN)
      return INITIAL_STATE
    default:
      return state
  }
}

export function AuthUser({children}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const client = useApolloClient()
  const value = useMemo(() => ({state, dispatch}), [state])
  useEffect(
    () =>
      async function getUser() {
        const accessToken = localStorage.getItem(ACCESS_TOKEN)
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        if (!!accessToken && !!refreshToken) {
          dispatch({type: 'loading'})
          const {
            data: {me}
          } = await client.query({query: USER_ME_QUERY})
          dispatch({
            type: 'loaded',
            payload: {
              me,
              refreshToken,
              accessToken
            }
          })
        }
      },
    [client]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default function useAuthUser() {
  return useContext(UserContext)
}
