import {useMutation} from '@apollo/client'
import {UPDATE_TOKEN} from 'api/mutations/users/updateToken'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateToken = () => {
  const [mutation, {data, error}] = useMutation(UPDATE_TOKEN, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateToken = async () => {
    await mutation()
  }

  return {
    updateToken,
    data,
    error
  }
}

export default useUpdateToken
