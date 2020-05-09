import { createAction, props } from "@ngrx/store";
import { LoginResult } from '../models';

export const loginSucceed = createAction("[Auth API] Login result", props<LoginResult>());
export const loginFailed = createAction("[Auth API] Login result", props<{ errorMessage: string }>());