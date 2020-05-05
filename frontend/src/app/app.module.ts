import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgJoystickModule } from "ng-joystick";
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './components/app/app.component';
import { ControlDeskComponent } from './components/control-desk/control-desk.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JoystickComponent } from './components/joystick/joystick.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { MaterialModule } from './material';

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
    NgJoystickModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
