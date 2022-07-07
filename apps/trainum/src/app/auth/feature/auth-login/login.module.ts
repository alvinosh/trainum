import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ButtonModule, HyperlinkModule, TextInputModule } from '@trainum/ui';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TextInputModule,
    ButtonModule,
    HyperlinkModule,
  ],
})
export class LoginModule {}
