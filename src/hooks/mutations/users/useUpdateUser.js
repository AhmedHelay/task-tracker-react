import {useMutation} from '@apollo/client'
import {UPDATE_USER} from 'api/mutations/users/updateUser'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateUser = () => {
  const [mutation, {data, loading, error}] = useMutation(UPDATE_USER, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateUser = async (formState) => {
    await mutation({
      variables: {...formState}
    })
  }

  return {
    updateUser,
    data,
    loading,
    error
  }
}

export default useUpdateUser
