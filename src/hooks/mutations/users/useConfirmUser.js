import {useMutation} from '@apollo/client'
import {CONFIRM_USER} from 'api/mutations/users/confirmUser'
import {CURRENT_USER} from 'api/query/currentUser'

const useConfirmUser = () => {
  const [mutation, {data, error, loading}] = useMutation(CONFIRM_USER, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const confirmUser = async (value) => {
    await mutation({
      variables: {value: value}
    })
  }

  return {
    confirmUser,
    data,
    loading,
    error
  }
}

export default useConfirmUser
