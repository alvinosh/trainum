import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { FormsModule } from '@angular/forms';
import { ValidationPipeModule } from '../validation-pipe/validation-pipe.module';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, FormsModule, ValidationPipeModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
