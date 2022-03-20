export const EmailValidator = (email) => {
  const regex = new RegExp('(.+){3,}@(.+){2,}\\.(.+){2,}')
  if (email === '') return
  if (!regex.test(email)) return 'This is not a valid email format!'
}
