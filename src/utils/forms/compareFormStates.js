import _ from 'lodash'

export default function compareFormStates(formState, INITIAL_STATE) {
  _.isEqual(formState, INITIAL_STATE)
}
