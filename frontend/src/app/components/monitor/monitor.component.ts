import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  @Input() monitorUrl: string;
  @Input() width: number;
  @Input() height: number;

  constructor() { }

  ngOnInit(): void {
  }

}
