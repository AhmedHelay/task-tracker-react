import React, {useEffect, useState} from 'react'

import {Box} from '@material-ui/core'
import PasswordInput from 'components/form/PasswordInput'
import useUpdatePassword from 'hooks/mutations/users/useUpdatePassword'
import handleFormChange from 'utils/forms/handleChange'
import passwordValidator from 'validators/formValidators/inputValidators/passwordValidator'
import {Button} from '@mui/material'

export default function UpdatePasswordForm() {
  const [formState, setFormState] = useState({password: ''})
  const [errorsState, setErrorsState] = useState()
  const {updatePassword, loading} = useUpdatePassword()

  const resetToken = localStorage.getItem('refresh_token')
  const sxProperties = {
    display: 'flex',
    flexDirection: 'column',
    mt: 5,
    pl: 3,
    pr: 25
  }

  useEffect(() => {
    setErrorsState(passwordValidator(formState.password))
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }

  async function handleUpdatePassword(e) {
    e.preventDefault()
    if (formState.password && !errorsState) {
      await updatePassword(formState.password, resetToken)
    }
  }

  return (
    <Box sx={{...sxProperties}}>
      <form>
        <PasswordInput
          id="password"
          label="New Password"
          value={formState.password}
          error={errorsState}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <Button
          sx={{
            mt: 2,
            maxWidth: '200px',
            fontWeight: 'bold'
          }}
          size="small"
          onClick={(e) => handleUpdatePassword(e)}
          disabled={loading}
          variant="contained"
        >
          Update Password
        </Button>
      </form>
    </Box>
  )
}
