import { createAction, props } from '@ngrx/store';

export const logInSubmitted = createAction(
    '[Auth Page] Log In Submitted',
    props<{email: string, password: string}>()
);