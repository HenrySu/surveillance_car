import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vector2 } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly carUrl = `${environment.backendUrl}/car`;
  constructor(private httpClient: HttpClient) { }

  move(vector: Vector2) {
    this.httpClient.post(this.carUrl, vector).subscribe();
  }
}
