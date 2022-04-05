export default function emailValidator(email) {
  const regex = new RegExp('[a-zA-Z](.+){2,}@(.+){2,}\\.(.+){2,}')
  if (email === '') return
  if (!regex.test(email)) return 'This is not a valid email format!'
}
