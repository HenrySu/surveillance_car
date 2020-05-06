import { createAction, props } from "@ngrx/store";
import { LoginResult } from '../models';

export const loginResponse = createAction("[Auth API] Login result", props<LoginResult>());