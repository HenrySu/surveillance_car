import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() width: number = 400;
  @Input() height: number = 400;
  monitorUrl: string = environment.cameraUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
