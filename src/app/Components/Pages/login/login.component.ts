import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestDto } from '../../../Models/user-models/login-request-dto.model';
import { LoginService } from '../../../Services/user-services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    this.initForm();
  }
  loginForm: FormGroup
  isSubmited = false;
  formData: LoginRequestDto

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
        , Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.loginForm.valid) {
      this.formData = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      }
      this.signIn(this.formData);
    }

  }

  signIn(loginData: LoginRequestDto) {
    this.loginService.login(loginData)
  }
}
