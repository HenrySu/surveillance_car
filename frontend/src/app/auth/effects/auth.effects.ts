import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from 'rxjs/operators';
import { AuthApiActions, LoginPageActions } from "../actions";
import { Credentials } from '../models';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
        private authSvc: AuthService) { }

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(LoginPageActions.login),
                map(action => action.credentials),
                exhaustMap((credentials: Credentials) =>
                    this.authSvc.login(credentials)
                        .pipe(
                            map(loginRes => AuthApiActions.loginResponse(loginRes)),
                        )
                )
            )
    );

}