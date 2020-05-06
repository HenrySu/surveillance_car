import { createReducer, on } from '@ngrx/store';
import { AuthApiActions } from '../actions';
import { loginResponse } from '../actions/auth-api.actins';

export const featureKey = "Auth";

export interface State {
    token: string;
}

export const initialState: State = {
    token: ""
}

export const reducer = createReducer(
    initialState,
    on(AuthApiActions.loginResponse,
        (state, loginResponse) => {
            if (loginResponse.isOK) {
                return {
                    ...state,
                    token: loginResponse.token
                };
            }
            return {
                ...state,
                token: ""
            };
        }),
);