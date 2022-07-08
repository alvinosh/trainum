import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationPipe } from './validation.pipe';

@NgModule({
  declarations: [ValidationPipe],
  imports: [CommonModule],
  exports: [ValidationPipe],
})
export class ValidationPipeModule {}
