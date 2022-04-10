import {useMutation} from '@apollo/client'
import {UPDATE_COMMENT} from 'api/mutations/comments/updateComment'
import {CURRENT_USER} from 'api/query/currentUser'

const useUpdateComment = () => {
  const [mutation, {data, error, loading}] = useMutation(UPDATE_COMMENT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const updateComment = async (id, text) => {
    await mutation({
      variables: {id: id, text: text}
    })
  }

  return {
    updateComment,
    data,
    loading,
    error
  }
}

export default useUpdateComment
