import { createReducer, on } from '@ngrx/store';
import { AuthApiActions } from '../actions';

export const featureKey = "Auth";

export interface State {
    token: string;
}

export const initialState: State = {
    token: ""
}

export const reducer = createReducer(
    initialState,
    on(AuthApiActions.loginSucceed,
        (state, loginResponse) =>
            ({
                ...state,
                token: loginResponse.token
            })),
    on(AuthApiActions.loginFailed,
        (state, err) => ({
            ...state,
            token: "",
        })),
);