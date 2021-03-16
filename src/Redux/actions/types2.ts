import { Color, colorList, AddFilter } from "./handler"

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface ReadSessionAction {
  type: typeof UPDATE_SESSION
  payload: Color
}

export type SystemActionTypes = ReadSessionAction