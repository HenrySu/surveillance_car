import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vector2 } from '../models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly carUrl = environment.carUrl;
  constructor(private httpClient: HttpClient) { }

  move(vector: Vector2): Observable<any> {
    return this.httpClient.post<Vector2>(this.carUrl, vector);
  }
}
