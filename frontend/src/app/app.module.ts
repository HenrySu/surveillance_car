import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MaterialModule } from './material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgJoystickModule } from "ng-joystick";
import { ControlDeskComponent } from './components/control-desk/control-desk.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { JoystickComponent } from './components/joystick/joystick.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

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
    AppRoutingModule,
    MaterialModule,
    NgJoystickModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
