import React, {useEffect, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import TextInput from 'components/form/TextInput'
import useUpdateUser from 'hooks/mutations/users/useUpdateUser'

import handleFormChange from 'utils/forms/handleChange'
import registrationFormValidator from 'validators/formValidators/registrationFormValidator'
import PasswordInput from 'components/form/PasswordInput'
import checkEmptyState from 'utils/forms/checkEmptyState'

export default function UpdateUserForm({user}) {
  const INITIAL_FORM_STATE = {
    email: '',
    firstName: '',
    lastName: '',
    currentPassword: '',
    password: ''
  }
  const {updateUser, loading, error} = useUpdateUser()
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
    //Check for error
    if (checkEmptyState(errorState)) {
      //Check for values
      if (
        formState.email ||
        formState.firstName ||
        formState.lastName ||
        (formState.currentPassword && formState.password)
      ) {
        Object.keys(formState).forEach(
          (key) => formState[key] === '' && delete formState[key]
        )
        await updateUser(formState)
        setFormState(INITIAL_FORM_STATE)
      }
    }
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', pl: 3, pr: 25}}>
      <Typography>{error}</Typography>
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
      <PasswordInput
        id="currentPassword"
        label="Current Password"
        value={formState.currentPassword}
        error={errorState.currentPassword}
        onBlur={(e) => handleEvent(e)}
        onChange={(e) => handleEvent(e)}
        autoComplete="off"
      />
      <PasswordInput
        id="password"
        label="New Password"
        value={formState.password}
        error={errorState.password}
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
    </Box>
  )
}
