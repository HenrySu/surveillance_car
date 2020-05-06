import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials, LoginResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): Observable<LoginResult> {
    if(credentials.username === "henry"){
      return of({
        isOK:true,
        errorMessage:"",
        token:"whatever"
      })
    }
    return of({
      isOK:false,
      errorMessage: "username or password is invalid",
      token: ``
    });
  }
}
