import { Types } from './types';

export const setAuth = (data:boolean) => ({
  type:Types.SET_AUTH,
  payload:data
})