import {useMutation} from '@apollo/client'
import {UPDATE_PROJECT} from 'api/mutations/projects/updateProject'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateProject = () => {
  const [mutation, {data, error, loading}] = useMutation(UPDATE_PROJECT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateProject = async (id, name, description) => {
    await mutation({variables: {id: id, name: name, description: description}})
  }

  return {
    updateProject,
    data,
    loading,
    error
  }
}

export default useUpdateProject
