import {useMutation} from '@apollo/client'
import {SIGN_UP} from 'api/mutations/auth/signUp'
import {CURRENT_USER} from 'api/query/currentUser'

const useSignUp = () => {
  const [mutation, {data, error}] = useMutation(SIGN_UP, {
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
    error
  }
}

export default useSignUp
