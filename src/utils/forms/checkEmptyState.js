export default function checkEmptyState(obj) {
  return !Object.keys(obj).some((key) => {
    return !!obj[key] === true
  })
}
