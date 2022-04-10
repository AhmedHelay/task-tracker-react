import {useMutation} from '@apollo/client'
import {SIGN_OUT} from 'api/mutations/auth/signOut'
import {CURRENT_USER} from 'api/query/currentUser'

const useSignOut = () => {
  const [mutation, {data, error}] = useMutation(SIGN_OUT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const signOut = async (everywhere) => {
    await mutation({variables: {everywhere: everywhere}})
  }

  return {
    signOut,
    data,
    error
  }
}

export default useSignOut
