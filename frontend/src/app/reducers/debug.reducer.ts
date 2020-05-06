import { ActionReducer } from '@ngrx/store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log("state", state);
        console.log("action", action);

        return reducer(state, action);
    }
}