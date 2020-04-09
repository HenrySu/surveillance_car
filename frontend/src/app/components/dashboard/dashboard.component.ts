import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgJoystickComponent } from "ng-joystick";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('joystick') joyStick: NgJoystickComponent;
  constructor() { }

  ngAfterViewInit(): void {
    this.joyStick.up$.subscribe(d => console.log('up', d));
    this.joyStick.down$.subscribe(d => console.log('down', d));
    this.joyStick.right$.subscribe(d => console.log('right', d));
    this.joyStick.left$.subscribe(d => console.log('left', d));
  }

  ngOnInit(): void {
  }

}
