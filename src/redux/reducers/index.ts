import { auth } from './auth';
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  auth,
})

export type RootState = ReturnType<typeof rootReducers>