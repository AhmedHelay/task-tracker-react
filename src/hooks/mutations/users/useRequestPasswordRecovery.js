import {useMutation} from '@apollo/client'
import {REQUEST_PASSWORD_RECOVERY} from 'api/mutations/users/requestPasswordRecovery'
import {CURRENT_USER} from 'api/query/currentUser'

const useRequestPasswordRecovery = () => {
  const [mutation, {data, error, loading}] = useMutation(
    REQUEST_PASSWORD_RECOVERY,
    {
      refetchQueries: [{query: CURRENT_USER}]
    }
  )

  const requestPasswordRecovery = async (email) => {
    await mutation({
      variables: {email: email}
    })
  }

  return {
    requestPasswordRecovery,
    data,
    loading,
    error
  }
}

export default useRequestPasswordRecovery
