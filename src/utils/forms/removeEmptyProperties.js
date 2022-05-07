export default function removeEmptyProperties(formState) {
  Object.keys(formState).forEach(
    (key) => formState[key] === '' && delete formState[key]
  )
}
