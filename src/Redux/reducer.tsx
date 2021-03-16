
import { SEND_COLOR, DELETE_COLOR,ADD_COLOR } from '../Redux/actions/types'


var initialState = "#000000"


export function rootReducer(state= initialState, action ) {

  switch (action.type) {
    case SEND_COLOR: {
      return action.payload
    }
    case DELETE_COLOR: {
      return Object.assign({},state,
          action.meta.timestamp)
      }
    case ADD_COLOR: {
      return Object.assign({},action.payload.name,
          action.payload.selected)
      }
    default:
      return state;
  }

}
