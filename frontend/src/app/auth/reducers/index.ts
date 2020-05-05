import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromLoginPage from "./login-page.reducer";

export const featureKey = "Auth";

export interface AuthState {
    [fromLoginPage.featureKey]: fromLoginPage.State,
}

export interface State {
    [featureKey]: AuthState,
}

export const selectAuthState = createFeatureSelector<State, AuthState>(featureKey);
export const selectLoginPageState = createSelector(selectAuthState, state => state[fromLoginPage.featureKey]);
export const selectLoginPagePending = createSelector(selectLoginPageState, state => state.pending);
export const selectLoginPageErrorMsg = createSelector(selectLoginPageState, state => state.errorMessage);