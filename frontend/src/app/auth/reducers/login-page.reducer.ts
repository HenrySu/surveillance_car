import { createReducer, on } from "@ngrx/store";
import { LoginPageActions } from "../actions";

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


    on(LoginPageActions.login,
        state => {
            console.log('www')
            return state;
        })
);