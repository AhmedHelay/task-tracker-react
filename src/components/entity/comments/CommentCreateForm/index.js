import React, {useState} from 'react'

import useCreateComment from 'hooks/mutations/comments/useCreateComment'

import Box from '@mui/material/Box'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import CustomButton from 'components/entity/mui/CustomButton'
import {useStyle} from './components'

export default function CommentCreateForm({taskId}) {
  const [text, setText] = useState(undefined)
  const {createComment, loading} = useCreateComment()
  const classes = useStyle()

  function handleFormChange(e) {
    setText(e.target.value)
  }

  async function onCreateClick() {
    if (text) {
      await createComment(taskId, text)
      setText('')
    }
  }

  return (
    <Box className={classes.root}>
      <CustomAreaField
        placeholder="Type comment here..."
        value={text}
        rows={3}
        onChange={(e) => handleFormChange(e)}
      />
      <CustomButton
        color="success"
        onClick={() => onCreateClick()}
        disabled={loading}
      >
        Create Comment
      </CustomButton>
    </Box>
  )
}
