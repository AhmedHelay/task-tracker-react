import {useMutation} from '@apollo/client'
import {SIGN_UP} from 'api/mutations/auth/signUp'
import {CURRENT_USER} from 'api/query/currentUser'

const useSignUp = () => {
  const [mutation, {data, error, loading}] = useMutation(SIGN_UP, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const signUp = async (email, password, firstName, lastName) => {
    await mutation({
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }
    })
  }

  return {
    signUp,
    data,
    loading,
    error
  }
}

export default useSignUp
