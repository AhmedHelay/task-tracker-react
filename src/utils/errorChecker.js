export default function isObjectUndefined(obj) {
  let state = true
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) state = false
  })
  return state
}
