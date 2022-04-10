import {useMutation} from '@apollo/client'
import {DESTROY_TASK} from 'api/mutations/tasks/destroyTask'
import {CURRENT_USER} from 'api/query/currentUser'

const useDestoryTask = () => {
  const [mutation, {data, error, loading}] = useMutation(DESTROY_TASK, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const destroyTask = async (id) => {
    await mutation({variables: {id: id}})
  }

  return {
    destroyTask,
    data,
    loading,
    error
  }
}

export default useDestoryTask
