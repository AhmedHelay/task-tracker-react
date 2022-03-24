export const TextFieldValidator = (name) => {
  if (name === '') return
  if (name.length < 2) return 'Field size must be more than 1'
  if (name.length > 10) return 'Field size must be less than 10'
}
