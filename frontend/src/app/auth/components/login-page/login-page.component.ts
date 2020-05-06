import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { LoginPageActions } from "../../actions";
import * as fromAuth from "../../reducers";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private store: Store<fromAuth.State>) { }

  form: FormGroup = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  errorMessage$ = this.store.select(fromAuth.selectLoginPageErrorMsg);


  ngOnInit(): void {
  }

  submit(): void {
    this.form.valid
      && this.store.dispatch(LoginPageActions.login({ credentials: this.form.value }));
  }
}
