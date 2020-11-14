import { createReducer, on} from '@ngrx/store';
import { State } from '.';
import { AppApiActions } from './actions';

export const initalState: State = {
    auth: {token: null, email: null}
}

export const appReducer = createReducer(
    initalState,
    on(AppApiActions.loggedInUserSuccess, (state, action): State => {
        return {
            ...state,
            auth: {
                token: action.token,
                email: action.email
            }
        }
    })
)