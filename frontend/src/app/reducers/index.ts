import { debug } from "./debug.reducer";
import { MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [debug];