import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  monitorUrl: string = environment.cameraUrl;
  @Input() width: number = 320;
  @Input() height: number = 240;

  constructor() {
  }

  ngOnInit(): void {
  }

}
