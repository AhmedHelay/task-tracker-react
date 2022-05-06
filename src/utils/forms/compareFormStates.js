import _ from 'lodash'

export default function compareFormStates(formState, INITIAL_STATE) {
  return _.isEqual(formState, INITIAL_STATE)
}
