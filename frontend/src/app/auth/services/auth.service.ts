import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): Observable<string> {
    return of("whatever");
  }
}
