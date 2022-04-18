import {useMutation} from '@apollo/client'
import {CREATE_COMMENT} from 'api/mutations/comments/createComment'
import {CURRENT_USER} from 'api/query/currentUser'

const useCreateComment = () => {
  const [mutation, {data, error, loading}] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{query: CURRENT_USER}]
  })

  const createComment = async (id, text) => {
    await mutation({
      variables: {id: id, text: text}
    })
  }

  return {
    createComment,
    data,
    loading,
    error
  }
}

export default useCreateComment
