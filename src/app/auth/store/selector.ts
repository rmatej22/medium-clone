import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;
