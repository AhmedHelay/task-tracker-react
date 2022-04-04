const regex = /[a-zA-Z](.+){2,}@(.+){2,}\.(.+){2,}/

export const emailValidator = (email) => {
  if (email === '') return
  if (!regex.test(email)) return 'This is not a valid email format!'
}
