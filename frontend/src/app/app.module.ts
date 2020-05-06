import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './components/app/app.component';
import { ControlDeskComponent } from './components/control-desk/control-desk.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JoystickComponent } from './components/joystick/joystick.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { MaterialModule } from './material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from "./reducers";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ControlDeskComponent,
    MonitorComponent,
    JoystickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
