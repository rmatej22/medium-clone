import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ ...state, isSubmitting: true })
  )
);

// THIS TYPE OF EXPORTING IS NO LONGER NEEDED
// export function reducers(state: AuthStateInterface, action: Action) {
//   return authReducer(state, action);
// }
