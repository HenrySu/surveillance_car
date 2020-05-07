import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth';
import { AppComponent } from './components/app/app.component';
import { ControlDeskComponent } from './car/components/control-desk/control-desk.component';
import { DashboardComponent } from './car/components/dashboard/dashboard.component';
import { JoystickComponent } from './car/components/joystick/joystick.component';
import { MonitorComponent } from './car/components/monitor/monitor.component';
import { MaterialModule } from './material';
import { metaReducers } from "./reducers";
import { CarModule } from './car';

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
    CarModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
