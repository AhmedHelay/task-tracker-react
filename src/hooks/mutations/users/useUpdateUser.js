import {useMutation} from '@apollo/client'
import {UPDATE_USER} from 'api/mutations/users/updateUser'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateUser = () => {
  const [mutation, {data}] = useMutation(UPDATE_USER, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateUser = async (
    email,
    password,
    currentPassword,
    firstName,
    lastName
  ) => {
    await mutation({
      variables: {
        email: email,
        password: password,
        currentPassword: currentPassword,
        firstName: firstName,
        lastName: lastName
      }
    })
  }

  return {
    updateUser,
    data
  }
}

export default useUpdateUser
