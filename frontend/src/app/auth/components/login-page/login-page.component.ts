import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import { LoginPageActions } from "../../actions";
import * as fromAuth from "../../reducers";

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
    console.log('sumbit');
    this.store.dispatch(LoginPageActions.login(this.form.value));
  }
}
