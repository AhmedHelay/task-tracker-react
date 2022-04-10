import {useMutation} from '@apollo/client'
import {CREATE_PROJECT} from 'api/mutations/projects/createProject'
import {CURRENT_USER} from 'api/query/currentUser'

const useCreateProject = () => {
  const [mutation, {data, error}] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const createProject = async (name, description) => {
    await mutation({variables: {name: name, description: description}})
  }

  return {
    createProject,
    data,
    error
  }
}

export default useCreateProject
