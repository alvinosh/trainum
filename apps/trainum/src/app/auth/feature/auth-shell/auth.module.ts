import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthShellComponent } from './auth-shell.component';

@NgModule({
  declarations: [AuthShellComponent],
  imports: [CommonModule, AuthRoutingModule, FontAwesomeModule],
})
export class AuthModule {}
