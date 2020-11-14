import { createReducer, on } from '@ngrx/store'
import { AuthState } from '..'
import { AppApiActions } from '../actions'

export const initalState: AuthState = {
    token: null,
    email: null,
}

export const authReducer = createReducer(
    initalState,
    on(AppApiActions.loggedInUserSuccess, (state, action): AuthState => {
        return {
            ...state,
            token: action.token,
            email: action.email
        }
    })
)