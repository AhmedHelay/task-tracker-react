import {useMutation} from '@apollo/client'
import {CREATE_TASK} from 'api/mutations/tasks/createTask'
import {CURRENT_USER} from 'api/query/currentUser'

const useCreateTask = () => {
  const [mutation, {data, error, loading}] = useMutation(CREATE_TASK, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const createTask = async (id, title, description, status) => {
    await mutation({
      variables: {
        id: id,
        title: title,
        description: description,
        status: status
      }
    })
  }

  return {
    createTask,
    data,
    loading,
    error
  }
}

export default useCreateTask
