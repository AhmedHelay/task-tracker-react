export default function textFieldValidator(name) {
  const numRegex = new RegExp('\\d+')
  if (name === '') return
  if (numRegex.test(name)) return 'Field must contain letters only'
  if (name.length < 2) return 'Field size must be more than 1'
  if (name.length > 10) return 'Field size must be less than 10'
}
