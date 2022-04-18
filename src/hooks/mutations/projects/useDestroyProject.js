import {useMutation} from '@apollo/client'
import {DESTROY_PROJECT} from 'api/mutations/projects/destroyProject'
import {CURRENT_USER} from 'api/query/currentUser'

const useDestoryProject = () => {
  const [mutation, {data, error, loading}] = useMutation(DESTROY_PROJECT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const destroyProject = async (id) => {
    await mutation({variables: {id: id}})
  }

  return {
    destroyProject,
    data,
    loading,
    error
  }
}

export default useDestoryProject
