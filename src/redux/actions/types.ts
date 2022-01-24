export enum Types {
  SET_AUTH = 'SET_AUTH',
}

export type TypeActionAuth = {
  type:Types.SET_AUTH,
  payload:boolean
}


export type TypeAction = TypeActionAuth