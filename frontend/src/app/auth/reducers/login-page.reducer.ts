import { createReducer, on } from "@ngrx/store";
import { LoginPageActions, AuthApiActions } from "../actions";
import { loginResponse } from '../actions/auth-api.actins';

export const featureKey = "loginPage";

export interface State {
    pending: boolean;
    errorMessage: string;
}

export const initialState: State = {
    pending: false,
    errorMessage: ""
};

export const reducer = createReducer(initialState,
    on(LoginPageActions.login,
        state => ({
            ...state,
            pending: true,
            errorMessage: ""
        })),

    on(AuthApiActions.loginResponse,
        (state, loginResponse) => {
            if (loginResponse.isOK) {
                return {
                    ...state,
                    errorMessage: "",
                    pending: false,
                }
            }

            return {
                ...state,
                errorMessage: loginResponse.errorMessage,
                pending: false,
            }
        })
);