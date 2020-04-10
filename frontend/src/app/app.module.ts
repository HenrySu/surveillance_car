import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MaterialModule } from './material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgJoystickModule } from "ng-joystick";
import { SteerComponent } from './components/steer/steer.component';
import { ControlDeskComponent } from './components/control-desk/control-desk.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SteerComponent,
    ControlDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgJoystickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
