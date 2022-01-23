export enum Types {
  SET_AUTH = 'SET_AUTH',
  SET_PAGINATION = 'SET_PAGINATION'
}

export type TypeActionAuth = {
  type:Types.SET_AUTH,
  payload:boolean
}

export type TypeActionPagination = {
  type:Types.SET_PAGINATION,
  payload:any
}

export type TypeAction = TypeActionAuth | TypeActionPagination