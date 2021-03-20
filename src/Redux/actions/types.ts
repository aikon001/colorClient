import { AddFilter } from "./handler";

export const SEND_COLOR = 'SELECT_COLOR'
export const DELETE_COLOR = 'DELETE_COLOR'
export const ADD_COLOR = 'ADD_COLOR'

interface SendColorAction {
  type: typeof SEND_COLOR
  payload: string
}

interface DeleteColorAction {
    type: typeof DELETE_COLOR
    payload: number
  }

  interface AddColorAction {
    type: typeof ADD_COLOR
    payload: AddFilter
  } 

  export type ActionTypes = SendColorAction | DeleteColorAction | AddColorAction