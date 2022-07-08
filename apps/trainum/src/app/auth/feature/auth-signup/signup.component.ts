import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'trainum-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
      Validators.maxLength(100),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  get form() {
    return {
      username: this.signupForm.controls['username'],
      email: this.signupForm.controls['email'],
      password: this.signupForm.controls['password'],
      confirm_password: this.signupForm.controls['confirm_password'],
    };
  }

  submitForm() {
    console.log(this.form);
  }
}
