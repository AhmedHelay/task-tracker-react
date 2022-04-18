import {useMutation} from '@apollo/client'
import {ADD_USER_TO_PROJECT} from 'api/mutations/projects/addUserToProject'
import {CURRENT_USER} from 'api/query/currentUser'

const useAddUserToProject = () => {
  const [mutation, {data, error, loading}] = useMutation(ADD_USER_TO_PROJECT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const addUserToProject = async (projectId, userId) => {
    await mutation({variables: {projectId: projectId, userId: userId}})
  }

  return {
    addUserToProject,
    data,
    loading,
    error
  }
}

export default useAddUserToProject
