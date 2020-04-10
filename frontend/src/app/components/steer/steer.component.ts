import { Component, OnInit, AfterViewInit, ViewChild, Output } from '@angular/core';
import { NgJoystickComponent } from 'ng-joystick';
import { Vector2 } from 'src/app/models/vector2';
import { Observable } from 'rxjs';
import { map, merge } from "rxjs/operators";

@Component({
  selector: 'app-steer',
  templateUrl: './steer.component.html',
  styleUrls: ['./steer.component.scss']
})
export class SteerComponent implements OnInit, AfterViewInit {
  @ViewChild('joystick') joyStick: NgJoystickComponent;
  @Output() steer$: Observable<Vector2>;
  constructor() { }

  ngAfterViewInit(): void {
    this.steer$ = this.joyStick.joystickMove$.pipe(
      map(move => new Vector2(this.normalizeAngle(move.angle.radian), move.force)),
      merge(this.joyStick.joystickRelease$.pipe(map(_ => new Vector2)))
    );
  }

  normalizeAngle(angle: number): number {
    return Math.PI * 2 - (angle + Math.PI / 2 * 3) % (Math.PI * 2)
  }


  ngOnInit(): void {
  }

}
