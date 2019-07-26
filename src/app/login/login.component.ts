import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;

  constructor(public auth:AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.createForm()
    this.loginForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      username: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  console.log(this.loginForm)
  }

  onSubmit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
  }
    const data = {
      "username" : "",
      "password" : ""
    }
    this.auth.getLogin(data).subscribe(res=>{
      debugger
      sessionStorage.setItem('userInfo',JSON.stringify(res))
    },error=>{
      console.log(error)
    })
  }





  createForm(){
    this.loginForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      username: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.loginForm.controls; }


}
