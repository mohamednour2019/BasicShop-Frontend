import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../Services/user-services/register.service';
import { RegisterRequestDto } from '../../../Models/user-models/register-request-dto.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userId: any
  registerForm: FormGroup
  UserData: RegisterRequestDto
  isSubmited = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required]),
      'lastname': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]),
      'phone': new FormControl(null, [Validators.pattern(/^[0-9]*$/), Validators.minLength(8)]),
    })

  }

  onSubmit() {

    if (this.registerForm.valid) {
      this.isSubmited = true;

      this.UserData = {
        Email: this.registerForm.value.email,
        FristName: this.registerForm.value.firstname,
        LastName: this.registerForm.value.lastname,
        Password: this.registerForm.value.password,
        PhoneNumber: this.registerForm.value.phone
      }

      this.register();
    }

  }

  register() {

    this.registerService.Register(this.UserData);
  }
}
