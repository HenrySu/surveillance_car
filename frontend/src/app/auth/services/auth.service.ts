import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../DTO';
import { Credentials, LoginResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private readonly loginUrl = environment.loginUrl;

  login(credentials: Credentials): Observable<LoginResult> {
    return this.http.post(this.loginUrl, credentials)
      .pipe(
        map((res: LoginResponse) => <LoginResult>{ isOK: true, errorMessage: "", token: res.accessToken }),
        catchError((err: HttpErrorResponse) => of({ isOK: false, errorMessage: "Either username or password incorrect.", token: "" }))
      );
  }
}
