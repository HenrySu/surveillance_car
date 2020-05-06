import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, LoginResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): Observable<LoginResult> {
    return of({
      isOK: true,
      errorMessage: "",
      token: `${credentials.username}-whatever-token`
    });
  }
}
