import React, {useState} from 'react'

import useUpdateComment from 'hooks/mutations/comments/useUpdateComment'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import CustomAreaField from 'components/entity/mui/CustomAreaField'
import CustomButton from 'components/entity/mui/CustomButton'
import {useStyle} from './components'

export default function CommentUpdateForm({id, text, onCloseFormClick}) {
  const [formText, setFormText] = useState(text)
  const {updateComment, loading} = useUpdateComment()
  const classes = useStyle()

  function handleChange(e) {
    setFormText(e.target.value)
  }

  async function onUpdateClick() {
    if (formText && formText !== text) {
      await updateComment(id, formText)
      onCloseFormClick()
    }
  }

  return (
    <Box className={classes.root}>
      <CustomAreaField
        value={formText}
        placeholder="Type updated comment text here..."
        onChange={(e) => handleChange(e)}
        rows={3}
      />
      <Box className={classes.action}>
        <CustomButton disabled={loading} onClick={() => onUpdateClick()}>
          Update Comment
        </CustomButton>
        <IconButton
          sx={{color: '#912000'}}
          color="warning"
          onClick={() => onCloseFormClick()}
        >
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
