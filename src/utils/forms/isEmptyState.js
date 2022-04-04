export default function isEmptyState(obj) {
  return !Object.keys(obj).some((key) => {
    return !!obj[key] === true
  })
}
