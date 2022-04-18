import {useMutation} from '@apollo/client'
import {UPDATE_TASK} from 'api/mutations/tasks/updateTask'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateTask = () => {
  const [mutation, {data, error, loading}] = useMutation(UPDATE_TASK, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateTask = async (id, title, description, status) => {
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
    updateTask,
    data,
    loading,
    error
  }
}

export default useUpdateTask
