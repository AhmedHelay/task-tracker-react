export default function passwordValidator(password) {
  const numRegex = new RegExp('\\d+')
  const letterRegex = new RegExp('[a-zA-Z]+')
  const bigLettersRegex = new RegExp('[A-Z]')
  if (password === '') return
  if (!numRegex.test(password)) return 'Password must contains numbers'
  if (!letterRegex.test(password)) return 'Password must contains letters'
  if (!bigLettersRegex.test(password))
    return 'Password must contain at least 1 big letter'
  if (password.length < 9) return 'Password must be more than 9 characters'
  if (password.length > 16) return 'Password cannot exceed 16 characters'
}
