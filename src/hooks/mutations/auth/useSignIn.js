import {useMutation} from '@apollo/client'
import {SIGN_IN} from 'api/mutations/auth/signIn'
import {CURRENT_USER} from 'api/query/currentUser'

const useSignIn = () => {
  const [mutation, {data, error}] = useMutation(SIGN_IN, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const signIn = async (email, password) => {
    await mutation({variables: {email: email, password: password}})
  }

  return {
    signIn,
    data,
    error
  }
}

export default useSignIn
