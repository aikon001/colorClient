import { Color} from './handler'
import { UPDATE_SESSION, SystemActionTypes } from './types2'

export function updateSession(newSession: Color): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}