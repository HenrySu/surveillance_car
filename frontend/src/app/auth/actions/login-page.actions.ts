import { createAction, props } from "@ngrx/store";
import { Credentials } from '../models';

export enum LoginPageActionTypes {
    Login = "[Login Page] Login",
}

export const login = createAction(LoginPageActionTypes.Login, props<{ credentials: Credentials }>());
