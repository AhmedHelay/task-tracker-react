import {useMutation} from '@apollo/client'
import {SIGN_UP} from 'api/mutations/auth/signUp'
import {CURRENT_USER} from 'api/query/currentUser'
import {ACCESS_TOKEN, REFRESH_TOKEN} from 'constants/tokens'

const useSignUp = () => {
  const [mutation, {data, error, loading}] = useMutation(SIGN_UP, {
    refetchQueries: ({
      data: {
        signup: {accessToken, refreshToken}
      }
    }) => {
      localStorage.setItem(ACCESS_TOKEN, accessToken)
      localStorage.setItem(REFRESH_TOKEN, refreshToken)
      return [CURRENT_USER]
    },
    onError: () => {}
  })

  const signUp = async (formState) => {
    await mutation({
      variables: {...formState}
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
