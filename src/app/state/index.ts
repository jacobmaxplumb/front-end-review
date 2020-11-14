import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './reducers/auth.reducer';

export interface State {
    auth: AuthState;
}

export interface AuthState {
    email: string;
    token: string;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer
}