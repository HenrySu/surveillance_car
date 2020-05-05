import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import * as fromAuth from "../../reducers";
import * as authActions from "../../actions";
import { Credentials } from '../../models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: "",
    password: ""
  });
  errorMessage = "";

  constructor(private fb: FormBuilder,
    private store: Store<fromAuth.State>) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.store.dispatch(authActions.LoginPageActions.loginAction(this.form.value));
  }
}
