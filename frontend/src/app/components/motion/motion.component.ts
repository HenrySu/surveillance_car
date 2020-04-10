import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgJoystickComponent } from 'ng-joystick';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss']
})
export class MotionComponent implements OnInit, AfterViewInit {
  @ViewChild('joystick') joyStick: NgJoystickComponent;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    // this.joyStick.up$.subscribe(d => console.log('up', d));
    // this.joyStick.down$.subscribe(d => console.log('down', d));
    // this.joyStick.right$.subscribe(d => console.log('right', d));
    // this.joyStick.left$.subscribe(d => console.log('left', d));
    this.joyStick.joystickStart$.subscribe(start => console.log(start));
    this.joyStick.joystickRelease$.subscribe(release => console.log('release'));
    this.joyStick.joystickMove$.subscribe(move => console.log(move.force, move.direction, move.angle));
  }
}
