import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { AppApiActions, AppPageActions } from "./actions";
import { concatMap, map } from "rxjs/operators";

@Injectable()
export class AppEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  logInUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AppPageActions.logInSubmitted),
      concatMap((action) => {
        return this.authService.logInUser(action.email, action.password).pipe(
          map((token: string) =>
            AppApiActions.loggedInUserSuccess({
              token: token,
              email: action.email,
            })
          )
        );
      })
    );
  });
}
