import isEqual from 'lodash/isEqual'

export default function compareFormStates(formState, INITIAL_STATE) {
  return isEqual(formState, INITIAL_STATE)
}
