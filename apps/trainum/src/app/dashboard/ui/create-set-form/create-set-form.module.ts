import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSetFormComponent } from './create-set-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragableModule } from '@trainum/ui';

@NgModule({
  declarations: [CreateSetFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DragableModule],
  exports: [CreateSetFormComponent],
})
export class CreateSetFormModule {}
