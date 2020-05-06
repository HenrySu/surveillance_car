import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import * as fromLoginPage from "./login-page.reducer";
import * as fromAuth from "./auth.reducer";

export const featureKey = "Auth";

export interface AuthState {
    [fromLoginPage.featureKey]: fromLoginPage.State,
    [fromAuth.featureKey]: fromAuth.State,
}

export interface State {
    [featureKey]: AuthState,
}

export const reducers: ActionReducerMap<AuthState> = {
    [fromLoginPage.featureKey]: fromLoginPage.reducer,
    [fromAuth.featureKey]: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>(featureKey);
export const selectLoginPageState = createSelector(selectAuthState, state => state[fromLoginPage.featureKey]);
export const selectLoginPagePending = createSelector(selectLoginPageState, state => state.pending);
export const selectLoginPageErrorMsg = createSelector(selectLoginPageState, state => state.errorMessage);

export const selectAuthApiState = createSelector(selectAuthState, state => state[fromAuth.featureKey]);
export const selectTokenState = createSelector(selectAuthApiState, state => state.token);