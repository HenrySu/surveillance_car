import { createAction } from "@ngrx/store";

export const loginSuccess = createAction("[Auth API] Login success");
export const loginFail = createAction("[Auth API] Login failure");