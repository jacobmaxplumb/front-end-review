import { createAction, props } from '@ngrx/store';

export const loggedInUserSuccess = createAction(
    '[Auth Api] Logged In User Success',
    props<{token: string, email: string}>()
);