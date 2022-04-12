import {useApolloClient, useMutation} from '@apollo/client'
import {SIGN_OUT} from 'api/mutations/auth/signOut'
import {CURRENT_USER} from 'api/query/currentUser'

const useSignOut = () => {
  const [mutation, {data, error, loading}] = useMutation(SIGN_OUT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const client = useApolloClient()
  const signOut = async (everywhere) => {
    localStorage.clear()
    await client.clearStore()
    if (everywhere === true)
      await mutation({variables: {everywhere: everywhere}})
  }

  return {
    signOut,
    data,
    loading,
    error
  }
}

export default useSignOut
