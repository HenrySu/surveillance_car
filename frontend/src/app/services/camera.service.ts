import { Injectable } from '@angular/core';
import { Vector2 } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private readonly monitorUrl = `${environment.backendUrl}/monitor`;
  constructor(private httpClient: HttpClient) { }

  move(vector: Vector2): void {
    this.httpClient.post(this.monitorUrl, vector).subscribe();
  }
}
