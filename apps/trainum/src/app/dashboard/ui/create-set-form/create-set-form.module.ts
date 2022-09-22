import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSetFormComponent } from './create-set-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateSetFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateSetFormComponent],
})
export class CreateSetFormModule {}
