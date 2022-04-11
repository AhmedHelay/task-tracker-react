import React, {createContext, useContext, useEffect, useMemo} from 'react'
import {useApolloClient, useQuery} from '@apollo/client'

import {CURRENT_USER} from 'api/query/currentUser'

const UserContext = createContext()

export function AuthUser({children}) {
  const {data, loading, refetch} = useQuery(CURRENT_USER)
  const client = useApolloClient()
  useEffect(() => {
    const cb = client.onClearStore(async () => {
      await refetch()
    })
    return () => {
      cb()
    }
  }, [client, refetch])
  const value = useMemo(
    () => ({
      user: data ? data.me : null,
      isLoading: loading
    }),
    [data, loading]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default function useAuthUser() {
  return useContext(UserContext)
}
