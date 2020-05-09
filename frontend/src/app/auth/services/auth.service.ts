import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, LoginResult } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<LoginResult> {
    if (credentials.username === "henry") {
      return of({
        isOK: true,
        errorMessage: "",
        token: "whatever"
      })
    }
    return of({
      isOK: false,
      errorMessage: "username or password is invalid",
      token: ``
    });
  }
}
