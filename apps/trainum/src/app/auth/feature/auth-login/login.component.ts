import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserDto } from '@trainum/models/auth';
import { InputTypes } from '@trainum/types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'trainum-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  InputType = InputTypes;

  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
    ]),
  });

  error_message = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get form() {
    return {
      username: this.loginForm.controls['username'],
      password: this.loginForm.controls['password'],
    };
  }

  submitForm() {
    const login_dto: LoginUserDto = {
      username: this.form.username.value,
      password: this.form.password.value,
    };

    this.authService.login(login_dto).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.error_message = error.error.message;
        this.form.username.setErrors({ empty: true });
        this.form.password.setErrors({ empty: true });

        console.error('ERROR :: ', error);
      },
    });
  }
}
