export default function isStateFilled(obj) {
  return !Object.keys(obj).some((key) => {
    return !!obj[key] === false
  })
}
