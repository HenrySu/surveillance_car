import { createReducer, on } from "@ngrx/store";
import { LoginPageActions } from "../actions";

export interface State {
    pending: boolean;
    errorMessage: string;
}

export const initialState: State = {
    pending: false,
    errorMessage: ""
};

export const reducer = createReducer(initialState,
    on(LoginPageActions.loginAction,
        state => ({
            ...state,
            pending: true,
            errorMessage: ""
        }))
);