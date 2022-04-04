export default function stateEmpty(obj) {
  return !Object.keys(obj).some((key) => {
    return !!obj[key] === true
  })
}
