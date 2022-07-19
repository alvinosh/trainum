import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {
  ButtonModule,
  HyperlinkModule,
  TextInputModule,
  ErrorMsgModule,
} from '@trainum/ui';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextInputModule,
    ButtonModule,
    HyperlinkModule,
    ErrorMsgModule,
  ],
})
export class LoginModule {}
