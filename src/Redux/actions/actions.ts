import { SEND_COLOR, DELETE_COLOR, ActionTypes } from './types'

// TypeScript infers that this function is returning SendColorAction
export function selectColor(newColor : string ): ActionTypes {
    return {
      type: SEND_COLOR,
      payload: newColor
    }
  }
  
  // TypeScript infers that this function is returning DeleteDeleteAction
  export function deleteColor(timestamp: number): ActionTypes {
    return {
      type: DELETE_COLOR,
      meta: {
        timestamp
      }
    }
  }