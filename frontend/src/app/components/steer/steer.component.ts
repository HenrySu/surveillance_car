import { Component, OnInit, AfterViewInit, ViewChild, Output } from '@angular/core';
import { NgJoystickComponent } from 'ng-joystick';
import { Vector2 } from 'src/app/models/vector2';
import { Observable } from 'rxjs';

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
    this.joyStick.joystickMove$.subscribe(x => console.log(new Vector2(this.normalizeAngle(x.angle.radian), x.force)));
    this.joyStick.joystickRelease$.subscribe(x => console.log(new Vector2()));
  }

  normalizeAngle(angle: number): number {
    return Math.PI * 2 - (angle + Math.PI / 2 * 3) % (Math.PI * 2)
  }


  ngOnInit(): void {
  }

}
