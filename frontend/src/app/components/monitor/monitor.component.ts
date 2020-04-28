import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() monitorUrl: string = environment.cameraUrl;
  @Input() width: number = 400;
  @Input() height: number = 400;

  constructor() {
   }

  ngOnInit(): void {
  }

}
