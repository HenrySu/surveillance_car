import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void {

  }
}
