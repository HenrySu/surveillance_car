import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() monitorUrl: string;
  @Input() width: number;
  @Input() height: number;

  constructor() {
    this.monitorUrl = environment.cameraUrl;
   }

  ngOnInit(): void {
  }

}
