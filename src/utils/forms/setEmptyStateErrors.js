import checkEmptyState from './checkEmptyState'

export default async function setEmptyStateErrors(
  formState,
  errorsState,
  setErrorsState
) {
  const errors = {email: undefined, password: undefined}
  if (!formState.email) errors.email = 'Field is Required'
  if (!formState.password) errors.password = 'Field is Required'
  await setErrorsState({...errorsState, ...errors})
  return checkEmptyState(errorsState)
}
