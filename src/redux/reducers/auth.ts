import { TypeAction, Types } from './../actions/types';

const initialState = {
  auth:false
}

type TypeInitialState = typeof initialState

export const auth = (state = initialState, action:TypeAction):TypeInitialState => {
  switch(action.type) {
    case Types.SET_AUTH: {
      return {
        ...state,
        auth:action.payload,
      }
    }
    
    default:
      return state
  }
}