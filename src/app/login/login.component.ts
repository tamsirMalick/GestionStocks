import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials = {
    username: '',
    password: ''
  };

  constructor(private appService: AppService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  login() {
    // this.credentials.username = this.loginForm.value('username');
    // this.credentials.password = this.loginForm.value('password');

    this.appService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/home');
    });
  }

}
