import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginPageActions, AuthApiActions } from "../actions";
import { map, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models';

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
                            map(loginRes => AuthApiActions.loginSuccess()),
                        )
                )
            )
    );

}