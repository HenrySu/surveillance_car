import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MaterialModule } from './material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgJoystickModule } from "ng-joystick";
import { MotionComponent } from './components/motion/motion.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MotionComponent
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
