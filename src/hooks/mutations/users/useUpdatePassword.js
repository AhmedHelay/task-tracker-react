import {useMutation} from '@apollo/client'
import {UPDATE_PASSWORD} from 'api/mutations/users/updatePassword'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdatePassword = () => {
  const [mutation, {data, error, loading}] = useMutation(UPDATE_PASSWORD, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updatePassword = async (password, resetToken) => {
    await mutation({
      variables: {password: password, resetToken: resetToken}
    })
  }

  return {
    updatePassword,
    data,
    loading,
    error
  }
}

export default useUpdatePassword
