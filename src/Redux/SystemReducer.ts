import { colorList } from './actions/handler'
import { SystemActionTypes, UPDATE_SESSION } from './actions/types2'

const initialState: colorList = {
  colors : []
}

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): object {
  switch (action.type) {
    case UPDATE_SESSION: {
      return action.payload
    }
    default:
      return state
  }
}