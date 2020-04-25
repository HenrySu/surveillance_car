import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CameraService, CarService } from 'src/app/services';
import { JoystickComponent } from '../joystick/joystick.component';

@Component({
  selector: 'app-control-desk',
  templateUrl: './control-desk.component.html',
  styleUrls: ['./control-desk.component.scss']
})
export class ControlDeskComponent implements OnDestroy, AfterViewInit {
  @ViewChild("carSteer") carSteer: JoystickComponent;
  @ViewChild("cameraSteer") cameraSteer: JoystickComponent;
  private subscriptions: Subscription[] = [];

  constructor(private carSvc: CarService,
    private cameraSvc: CameraService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.carSteer.joystickPositionPercentageVector$.subscribe(x => console.log(`car`)),
      this.cameraSteer.joystickPositionPercentageVector$.subscribe(x => console.log(`camera`)),
    );
  }
}
