export default function isErrorStateEmpty(obj) {
  return !Object.keys(obj).some((key) => {
    return !!obj[key] === true
  })
}
