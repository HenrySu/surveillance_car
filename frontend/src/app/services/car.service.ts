import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vector2 } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly carRouter = `${environment.backendUrl}/car`;
  constructor(private httpClient: HttpClient) { }

  move(vector: Vector2) {
    return this.httpClient.post<Vector2>(this.carRouter, vector);
  }
}
