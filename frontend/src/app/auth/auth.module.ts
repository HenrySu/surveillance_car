import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from '../material';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthEffects } from './effects';
import * as fromAuth from "./reducers";



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.featureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
