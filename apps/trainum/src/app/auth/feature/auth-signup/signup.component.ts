import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateUserDto } from '@trainum/models/auth';
import { AuthService } from '../../services/auth.service';
import { EmailExists, PasswordsMatch, UsernameExists } from '../../validators';

@Component({
  selector: 'trainum-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup = this.fb.group({
    username: new FormControl(
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      [UsernameExists(this.authService)]
    ),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
        Validators.maxLength(100),
      ],
      [EmailExists(this.authService)]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
      PasswordsMatch('password'),
    ]),
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  get form() {
    return {
      username: this.signupForm.controls['username'],
      email: this.signupForm.controls['email'],
      password: this.signupForm.controls['password'],
      confirm_password: this.signupForm.controls['confirm_password'],
    };
  }

  submitForm() {
    const signup_dto: CreateUserDto = {
      username: this.form.username.value,
      email: this.form.email.value,
      password: this.form.password.value,
      confirm_password: this.form.confirm_password.value,
    };

    this.authService.signup(signup_dto).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
