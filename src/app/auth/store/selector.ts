import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';
import { createSelector } from '@ngrx/store';

// get a top-level feature state
export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

// return a slice of state, isSubmitting
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

// return a slice of state, validationErrors
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);

// return a slice of state, isLoggedIn
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

// return a slice of state, isAnonymusSelector (if user is not yet logged in)
export const isAnonymusSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
);

// return a slice of state, currentUser
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authFeatureSelector: AuthStateInterface) => authFeatureSelector.currentUser
);
