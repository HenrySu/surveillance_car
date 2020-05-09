import { createReducer, on } from "@ngrx/store";
import { AuthApiActions, LoginPageActions } from "../actions";

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

    on(AuthApiActions.loginSucceed,
        (state, res) => ({
            ...state,
            errorMessage: "",
            pending: false,
        })),

    on(AuthApiActions.loginFailed, (state, error) => ({
        ...state,
        errorMessage: error.errorMessage,
        pending: false,
    })),
);