import { Injectable } from '@angular/core';
import { Vector2 } from '../models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private readonly monitorUrl = environment.monitorUrl;
  constructor(private httpClient: HttpClient) { }

  move(vector: Vector2): Observable<any> {
    return this.httpClient.post(this.monitorUrl, vector);
  }
}
