import React, {useEffect, useState} from 'react'
import {Box, Button} from '@mui/material'
import TextInput from 'components/form/TextInput'
import useUpdateUser from 'hooks/mutations/users/useUpdateUser'

import handleFormChange from 'utils/forms/handleChange'
import registrationFormValidator from 'validators/formValidators/registrationFormValidator'

export default function UpdateUserForm({user}) {
  const INITIAL_FORM_STATE = {
    email: '',
    firstName: '',
    lastName: ''
  }
  const {updateUser, loading} = useUpdateUser()
  const [formState, setFormState] = useState(INITIAL_FORM_STATE)
  const [errorState, setErrorState] = useState(INITIAL_FORM_STATE)

  useEffect(() => {
    setErrorState((errorState) =>
      registrationFormValidator(formState, errorState)
    )
  }, [formState])

  function handleEvent(event) {
    handleFormChange(event, formState, setFormState)
  }
  async function handleUpdateUser() {
    if (
      !errorState.email ||
      !errorState.firstName ||
      !errorState.lastName ||
      formState.email ||
      formState.firstName ||
      formState.lastName
    ) {
      Object.keys(formState).forEach(
        (key) => formState[key] === '' && delete formState[key]
      )
      await updateUser(formState)
      setFormState(INITIAL_FORM_STATE)
    }
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', pl: 3, pr: 25}}>
      <form>
        <TextInput
          id="email"
          placeholder={user.email}
          label="Email"
          value={formState.email}
          error={errorState.email}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <TextInput
          id="firstName"
          placeholder={user.firstName}
          label="First Name"
          value={formState.firstName}
          error={errorState.firstName}
          onBlur={(e) => handleEvent(e)}
          onChange={(e) => handleEvent(e)}
          autoComplete="off"
        />
        <TextInput
          id="lastName"
          placeholder={user.lastName}
          label="Last Name"
          value={formState.lastName}
          error={errorState.lastName}
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
          onClick={(e) => handleUpdateUser(e)}
          disabled={loading}
          variant="contained"
        >
          Update User
        </Button>
      </form>
    </Box>
  )
}
