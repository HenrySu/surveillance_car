import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SteerComponent } from '../steer/steer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-control-desk',
  templateUrl: './control-desk.component.html',
  styleUrls: ['./control-desk.component.scss']
})
export class ControlDeskComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("carSteer") carSteer: SteerComponent;
  @ViewChild("cameraSteer") cameraSteer: SteerComponent;
  private subscriptions: Subscription[] = [];

  constructor() { }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.carSteer.steer$.subscribe(x => console.log(`car`)),
      this.cameraSteer.steer$.subscribe(x => console.log(`camera`)),
    );
  }

  ngOnInit(): void {
  }

}
